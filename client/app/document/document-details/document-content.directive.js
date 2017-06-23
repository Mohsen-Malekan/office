/*@ngInject*/
export default ($compile, $parse) =>
  (scope, element, attrs) => {
    let html = $parse(attrs.documentContent);
    scope.$watch(html, updateHtml);

    function updateHtml() {
      element.html('');
      element.append($compile(html(scope))(scope));
    }
  };
