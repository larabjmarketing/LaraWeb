(function () {
  var root = document.getElementById('calc');
  if (!root) return;
  var nf0 = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 });
  var nf1 = new Intl.NumberFormat('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  var nf2 = new Intl.NumberFormat('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function eur(v, d) { return (d ? nf2 : nf0).format(v) + ' €'; }
  function num(id) { var v = parseFloat(String(document.getElementById(id).value).replace(',', '.')); return isFinite(v) ? v : 0; }
  var tabs = root.querySelectorAll('[role="tab"]');
  var panels = { shop: document.getElementById('panel-shop'), leads: document.getElementById('panel-leads') };
  var out = document.getElementById('results');
  var mode = 'shop';
  function setMode(m) {
    mode = m;
    tabs.forEach(function (t) { t.setAttribute('aria-selected', t.dataset.mode === m ? 'true' : 'false'); });
    panels.shop.hidden = m !== 'shop'; panels.leads.hidden = m !== 'leads';
    calc();
  }
  function row(k, v) { return '<div class="r"><dt>' + k + '</dt><dd>' + v + '</dd></div>'; }
  function calc() {
    var html = '', verdict = '', ok = false;
    if (mode === 'shop') {
      var inv = num('s-inv'), ing = num('s-ing'), ped = num('s-ped'), mar = num('s-mar') / 100;
      if (inv <= 0 || ing <= 0 || ped <= 0 || mar <= 0 || mar > 1) { out.innerHTML = '<p class="verdict">Rellena todos los campos con valores mayores que cero.</p>'; return; }
      var roas = ing / inv, roasEq = 1 / mar, cpa = inv / ped, ticket = ing / ped, cpaMax = ticket * mar, ben = ing * mar - inv;
      html = row('ROAS actual', nf2.format(roas) + 'x') + row('ROAS de equilibrio', nf2.format(roasEq) + 'x') + row('CPA actual', eur(cpa, true)) + row('CPA máximo rentable', eur(cpaMax, true)) + row('Beneficio bruto tras publicidad', eur(ben));
      ok = roas >= roasEq;
      verdict = ok ? 'Estás por encima del punto de equilibrio: cada euro invertido deja beneficio bruto.' : 'Estás por debajo del punto de equilibrio: con estas cifras cada euro invertido pierde dinero.';
    } else {
      var i2 = num('l-inv'), leads = num('l-leads'), conv = num('l-conv') / 100, val = num('l-val');
      if (i2 <= 0 || leads <= 0 || conv <= 0 || conv > 1 || val <= 0) { out.innerHTML = '<p class="verdict">Rellena todos los campos con valores mayores que cero.</p>'; return; }
      var cpl = i2 / leads, cli = leads * conv, cpc = i2 / cli, ben2 = cli * val - i2, roi = ben2 / i2, cplMax = val * conv;
      html = row('Coste por lead (CPL)', eur(cpl, true)) + row('CPL máximo rentable', eur(cplMax, true)) + row('Clientes al mes', nf1.format(cli)) + row('Coste por cliente', eur(cpc, true)) + row('Beneficio tras publicidad', eur(ben2)) + row('Retorno sobre la inversión', nf0.format(roi * 100) + '%');
      ok = ben2 >= 0;
      verdict = ok ? 'Con estas cifras la captación es rentable: cada cliente deja más de lo que cuesta conseguirlo.' : 'Con estas cifras la captación pierde dinero: cada cliente cuesta más de lo que deja.';
    }
    out.innerHTML = '<dl>' + html + '</dl><p class="verdict ' + (ok ? 'ok' : '') + '">' + verdict + '</p><p class="small">Cálculo orientativo con los datos que introduces. No incluye otros costes (personal, estructura, impuestos) ni recompra.</p>';
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { setMode(t.dataset.mode); }); });
  root.addEventListener('input', calc);
  setMode('shop');
})();
