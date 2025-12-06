(function () {
  const baseTag = document.getElementById('dynamic-base');

  var hostname = location.hostname;
  var isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';

  var baseHref = isLocal
    ? '/' // 로컬 주소
    : '/_assets/'; // 실제 서버 주소

  baseTag.href = baseHref;
})();
