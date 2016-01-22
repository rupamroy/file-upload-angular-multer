(function () {
    angular.module('myApp')
        .controller('myCtrl', MyCtrl);

    MyCtrl.$inject = ['$scope', 'Upload'];

    function MyCtrl($scope, Upload) {
        $scope.content = "This is a test content";
        $scope.uploadFile = function () {
            if ($scope.picFile) {
                Upload.upload({
                        url: '/api/upload', //node.js route
                        file: $scope.picFile
                    })
                    .success(function (data) {
                        console.log(data, 'uploaded');
                    });
            }
        };
    }
})();