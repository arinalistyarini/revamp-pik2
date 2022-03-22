export default function map() {
  const API_KEY = 'AIzaSyCV2pjazB0h2KUYLHWEXQ7T9gmpuHqUiSU';
  const API_GMAPS = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Marketing+Gallery+Sedayu+Indo+CIty`;

  $('.map-content iframe').attr('src', API_GMAPS);
}
