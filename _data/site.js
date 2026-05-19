const path = require('path');
const fs = require('fs');

const defaults = {
  siteName: '摄影日记',
  siteTitle: '记录生活',
  siteDescription: '用镜头捕捉每一个瞬间',
  footer: { html: '© 2026' },
  contacts: {}
};

const configPath = path.join(__dirname, '..', 'config.js');

try {
  if (fs.existsSync(configPath)) {
    const config = require(configPath);
    module.exports = { ...defaults, ...config, contacts: { ...defaults.contacts, ...(config.contacts || {}) } };
    return;
  }
} catch (e) {
  console.warn('⚠️  config.js 加载失败，使用默认配置:', e.message);
}

module.exports = defaults;
