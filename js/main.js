var TermsEN = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('wEN'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: 'https://raw.githubusercontent.com/softvenue/i18n/master/i18n.json'
  });
  
  var TermsAR = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('wAR'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: 'https://raw.githubusercontent.com/softvenue/i18n/master/i18n.json'
  });
  
  TermsEN.clear();  
  TermsEN.clearPrefetchCache();
  TermsEN.clearRemoteCache();
  TermsEN.initialize(true);
  TermsAR.clear();
  TermsAR.clearPrefetchCache();
  TermsAR.clearRemoteCache();
  TermsAR.initialize(true);
  
  $('#multiple-datasets .typeahead').typeahead({
    highlight: true,
  },
  {
    name: 'enTerms',
    display: 'wEN',
    source: TermsEN,
    templates: {
      header: '<h3 class="ar">مصطلحات Terms</h3>',
      suggestion: function (data) {
        return '<p><strong>' + data.wAR + '</strong> = ' + data.wEN + '</p>';
      }
    }
  },
  {
    name: 'arTerms',
    display: 'wAR',
    source: TermsAR,
    templates: {
      header: '<h3 class="ar">Terms مصطلحات</h3>',
      suggestion: function (data) {
        return '<p><strong>' + data.wEN + '</strong> = ' + data.wAR + '</p>';
      }
    }
  });