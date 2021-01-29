$(document).ready(function () {
  $("#table_id").DataTable({
    ajax: {
      url: "https://raw.githubusercontent.com/softvenue/i18n/master/i18n.json",
      dataSrc: "",
    },
    columns: [ { data: "wEN" },{ data: "wAR" }],
  });
});
