(function () {
  "use strict";

  var GFORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSe4pEZdRDwWbM-COXUn43oVUHyuzp7MgQYDomqi6TBDwa7w1w/formResponse";
  var ENTRY_NAME = "entry.939075562";
  var ENTRY_EMAIL = "entry.1895978749";
  var ENTRY_EXT = "entry.291323472";
  var IFRAME_NAME = "gform-target-frame";

  function ensureTargetIframe() {
    if (document.getElementsByName(IFRAME_NAME).length) return;
    var iframe = document.createElement("iframe");
    iframe.name = IFRAME_NAME;
    iframe.style.display = "none";
    document.body.appendChild(iframe);
  }

  function submitToGoogleForm(name, email, extLabel) {
    var form = document.createElement("form");
    form.action = GFORM_ACTION;
    form.method = "POST";
    form.target = IFRAME_NAME;
    form.style.display = "none";

    function addField(fieldName, value) {
      var input = document.createElement("input");
      input.name = fieldName;
      input.value = value;
      form.appendChild(input);
    }
    addField(ENTRY_NAME, name);
    addField(ENTRY_EMAIL, email);
    addField(ENTRY_EXT, extLabel);

    document.body.appendChild(form);
    form.submit();
    form.parentNode.removeChild(form);
  }

  function triggerDownload(href) {
    var a = document.createElement("a");
    a.href = href;
    a.setAttribute("download", "");
    document.body.appendChild(a);
    a.click();
    a.parentNode.removeChild(a);
  }

  document.querySelectorAll(".download-gate-form").forEach(function (form) {
    ensureTargetIframe();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nameInput = form.querySelector('[data-field="name"]');
      var emailInput = form.querySelector('[data-field="email"]');
      var name = nameInput.value.trim();
      var email = emailInput.value.trim();
      if (!name) {
        nameInput.focus();
        return;
      }

      submitToGoogleForm(name, email, form.dataset.extLabel);
      triggerDownload(form.dataset.zipHref);

      var status = form.querySelector(".download-gate-status");
      if (status) status.hidden = false;
    });
  });
})();
