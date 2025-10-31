import * as cheerio from "cheerio";

/** Remove “Appointment” blocks (right-side form) from scraped HTML */
export function stripAppointment(html: string): string {
  if (!html) return html;
  const $ = cheerio.load(html);

  // Common containers
  $('#appointment, .appointment, .appointment-section, .right-sidebar').remove();

  // Any form that looks like the booking form (captcha / select fields)
  $('form').each((_, el) => {
    const txt = ($(el).text() || '').toLowerCase();
    const looksLikeBooking =
      txt.includes('captcha') ||
      txt.includes('select hospital') ||
      txt.includes('select doctor') ||
      txt.includes('select treatment');
    if (looksLikeBooking) $(el).closest('section,div,form').remove();
  });

  // Headings titled “Appointment”
  $('h1,h2,h3,h4,h5').each((_, el) => {
    const t = ($(el).text() || '').trim().toLowerCase();
    if (t === 'appointment' || t.startsWith('book an appointment')) {
      const box = $(el).closest('section,div');
      if (box.length) box.remove(); else $(el).remove();
    }
  });

  // Common inputs
  $('input[name="appointment_date"], #appointment-date').each((_, el) => {
    $(el).closest('section,div,form').remove();
  });

  return $('body').length ? $('body').html() || '' : $.root().html() || '';
}
