<?php
/**
 * Plugin Name: KIDS Core
 * Description: Formular-Handler mit Versand über die Resend-API (Port von app/src/pages/api/submit.ts)
 */

add_action('admin_post_nopriv_kids_form', 'kids_core_handle_form');
add_action('admin_post_kids_form', 'kids_core_handle_form');

/**
 * Menschenlesbare Labels für bekannte Feldnamen.
 */
function kids_core_form_labels(): array
{
    return [
        'Name' => 'Name',
        'E-Mail' => 'E-Mail',
        'Telefon' => 'Telefon',
        'Name_des_Kindes' => 'Name des Kindes',
        'Alter' => 'Alter des Kindes',
        'Anlass' => 'Anlass',
        'Geburtsdatum' => 'Geburtsdatum',
        'Eintritt' => 'Gewünschter Eintritt',
        'Nachricht' => 'Nachricht',
        'Anrede' => 'Anrede',
        'Vorname' => 'Vorname',
        'Nachname' => 'Nachname',
        'Strasse' => 'Straße und Hausnummer',
        'PLZ' => 'Postleitzahl',
        'Ort' => 'Ort',
        'IBAN' => 'IBAN',
        'BIC' => 'BIC',
        'Betrag' => 'Betrag (€)',
        'Spendenart' => 'Art der Spende',
        'Spendenquittung' => 'Spendenquittung erwünscht',
        'Kommentar' => 'Kommentar',
    ];
}

/**
 * Formular-Registry: Betreff je Formulartyp.
 */
function kids_core_form_types(): array
{
    return [
        'kennenlernen' => ['subject' => 'Neue Kennenlern-Anfrage'],
        'spenden' => ['subject' => 'Neue Spendenanfrage'],
        'kontakt' => ['subject' => 'Neue Kontaktanfrage'],
    ];
}

function kids_core_handle_form(): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        wp_die('Nur POST erlaubt.', '', ['response' => 405]);
    }

    $post = wp_unslash($_POST);

    // Honeypot: ein verstecktes Feld, das echte Nutzer nie ausfüllen. Bots schon.
    if (!empty($post['website'])) {
        // Erfolg vortäuschen, um den Bot still zu verwerfen.
        kids_core_redirect_danke();
    }

    // Einwilligung: Wenn das Formular eine Datenschutz-Checkbox mitschickt, muss sie gesetzt sein.
    if (isset($post['Datenschutz']) && !$post['Datenschutz']) {
        wp_die('Datenschutz-Einwilligung fehlt.', '', ['response' => 400]);
    }

    $forms = kids_core_form_types();
    $form_type = (string) ($post['_form'] ?? '');
    if (!isset($forms[$form_type])) {
        wp_die('Unbekannter Formulartyp.', '', ['response' => 400]);
    }

    // Alle öffentlichen Felder einsammeln ("_"-Präfix, Honeypot, Consent und WP-Felder überspringen).
    $entries = [];
    foreach ($post as $key => $value) {
        if (str_starts_with($key, '_') || in_array($key, ['website', 'Datenschutz', 'action'], true)) {
            continue;
        }
        $str = is_string($value) ? trim($value) : '';
        if ($str !== '') {
            $entries[] = [$key, $str];
        }
    }

    if (!$entries) {
        wp_die('Leeres Formular.', '', ['response' => 400]);
    }

    $api_key = getenv('RESEND_API_KEY');
    if (!$api_key) {
        // Ohne Key (lokale Entwicklung) loggen und trotzdem weiterleiten,
        // damit der Ablauf lokal testbar bleibt.
        error_log('[kids_form] RESEND_API_KEY fehlt — Payload verworfen: ' . wp_json_encode($entries));
        kids_core_redirect_danke();
    }

    $reply_to = trim((string) ($post['E-Mail'] ?? ''));

    $body = [
        'from' => 'KIDS Website <website@kids-bonn.de>',
        'to' => getenv('MAIL_TO') ?: 'kita@kids-bonn.de',
        'subject' => $forms[$form_type]['subject'] . ' — ' . $entries[0][1],
        'text' => kids_core_render_text($entries),
        'html' => kids_core_render_html($entries),
    ];
    if ($reply_to) {
        $body['reply_to'] = $reply_to;
    }

    $response = wp_remote_post('https://api.resend.com/emails', [
        'headers' => [
            'Authorization' => 'Bearer ' . $api_key,
            'Content-Type' => 'application/json',
        ],
        'body' => wp_json_encode($body),
        'timeout' => 15,
    ]);

    if (is_wp_error($response) || wp_remote_retrieve_response_code($response) >= 300) {
        error_log('[kids_form] Resend-Fehler: ' . (is_wp_error($response)
            ? $response->get_error_message()
            : wp_remote_retrieve_response_code($response) . ' ' . wp_remote_retrieve_body($response)));
        wp_die(
            'Da ist leider etwas schiefgelaufen. Bitte per Mail an kita@kids-bonn.de.',
            '',
            ['response' => 502]
        );
    }

    kids_core_redirect_danke();
}

function kids_core_redirect_danke(): void
{
    wp_safe_redirect(home_url('/danke/'), 303);
    exit;
}

/**
 * @param array<array{0: string, 1: string}> $entries
 */
function kids_core_render_text(array $entries): string
{
    $labels = kids_core_form_labels();
    $lines = [];
    foreach ($entries as [$key, $value]) {
        $lines[] = ($labels[$key] ?? $key) . ': ' . $value;
    }

    return implode("\n", $lines);
}

/**
 * @param array<array{0: string, 1: string}> $entries
 */
function kids_core_render_html(array $entries): string
{
    $labels = kids_core_form_labels();
    $rows = '';
    foreach ($entries as [$key, $value]) {
        $rows .= sprintf(
            '<tr>
				<td style="padding:6px 12px 6px 0;color:#6a6357;vertical-align:top;">%s</td>
				<td style="padding:6px 0;color:#3a342c;vertical-align:top;">%s</td>
			</tr>',
            esc_html($labels[$key] ?? $key),
            nl2br(esc_html($value))
        );
    }

    return '<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">' . $rows . '</table>';
}

/* Disable WordPress Admin Bar for all users */
add_filter( 'show_admin_bar', fn() => false );
