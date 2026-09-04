/* HKUST Web · Chart.js theme
   Usage: load Chart.js (https://cdn.jsdelivr.net/npm/chart.js@4) then this file; call HKUSTChartTheme.apply(Chart).
   Always put the <canvas> inside a wrapper with an explicit height (e.g. <div style="position:relative;height:200px">) when using
   maintainAspectRatio:false — a bare canvas in a padded card grows on every resize (feedback loop).
   Palette mirrors --viz-1..6; grid/axis mirror --viz-grid / --viz-axis; font is Mulish 11px. */
(function (root) {
  const palette = ['#0054a6', '#29abe2', '#996600', '#f7941d', '#009a61', '#9aa6b8'];
  const theme = {
    palette,
    apply(Chart) {
      const d = Chart.defaults;
      d.font.family = '"Mulish","Muli","Arial",sans-serif';
      d.font.size = 11;
      d.color = '#8c8f90';
      d.borderColor = '#ebf0f5';
      d.elements.bar.borderRadius = 0;
      d.elements.bar.borderSkipped = 'bottom';
      d.elements.line.borderWidth = 2;
      d.elements.line.tension = 0;
      d.elements.point.radius = 3;
      d.elements.point.backgroundColor = '#fff';
      d.elements.point.borderWidth = 2;
      d.plugins.legend.position = 'bottom';
      d.plugins.legend.align = 'start';
      d.plugins.legend.labels.boxWidth = 10;
      d.plugins.legend.labels.boxHeight = 10;
      d.plugins.legend.labels.usePointStyle = false;
      d.plugins.tooltip.backgroundColor = '#ffffff';
      d.plugins.tooltip.titleColor = '#003366';
      d.plugins.tooltip.bodyColor = '#1f2a44';
      d.plugins.tooltip.borderColor = '#d8dee8';
      d.plugins.tooltip.borderWidth = 1;
      d.plugins.tooltip.titleFont = { weight: '700', size: 12 };
      d.plugins.tooltip.bodyFont = { size: 12 };
      d.plugins.tooltip.cornerRadius = 4;
      d.plugins.tooltip.padding = 8;
      d.plugins.tooltip.displayColors = true;
      d.plugins.tooltip.boxWidth = 8;
      d.plugins.tooltip.boxHeight = 8;
      d.plugins.tooltip.boxPadding = 4;
      d.plugins.tooltip.usePointStyle = false;
      d.scales = d.scales || {};
      // colour datasets that don't set their own colours
      Chart.register({
        id: 'hkustPalette',
        beforeInit(chart) {
          chart.data.datasets.forEach((ds, i) => {
            const c = palette[i % palette.length];
            if (ds.backgroundColor == null) ds.backgroundColor = chart.config.type === 'line' ? 'rgba(0,84,166,.08)' : c;
            if (ds.borderColor == null) ds.borderColor = c;
            if (chart.config.type === 'line' && ds.fill == null) ds.fill = i === 0;
          });
        },
      });
    },
    /** Scale options to spread on x/y: `scales: { y: HKUSTChartTheme.scale({ beginAtZero: true }) }` */
    scale(extra) {
      return Object.assign({ grid: { color: '#ebf0f5', drawTicks: false }, border: { color: '#9aa6b8' }, ticks: { color: '#8c8f90', padding: 8 } }, extra || {});
    },
  };
  root.HKUSTChartTheme = theme;
  if (typeof module !== 'undefined') module.exports = theme;
})(typeof window !== 'undefined' ? window : globalThis);
