(function () {    

    function MainController($timeout) {
        var self = this;
        self.timeout = $timeout;        
        self.name = 'Asit Kumar Parida';
        self.header = document.getElementById('header');
        self.showColorPicker = false;
        self.settingsPaneColorsInitalized = false;
        self.colorModes = [
            { id: 'col0', colorId: "turquoise", name: "turquoise", code: "#1abc9c" },
            { id: 'col1', colorId: "emerland", name: "emerland", code: "#2ecc71" },
            { id: 'col2', colorId: "nephritis", name: "nephritis", code: "#27ae60" },
            { id: 'col3', colorId: "peterRiver", name: "peter river", code: "#3498db" },
            { id: 'col4', colorId: "wetAsphalt", name: "wet asphalt", code: "#34495e" },
            { id: 'col5', colorId: "amethyst", name: "amethyst", code: "#9b59b6" },
            { id: 'col6', colorId: "carrot", name: "carrot", code: "#e67e22" },
            { id: 'col7', colorId: "alizarin", name: "alizarin", code: "#e74c3c" },
            { id: 'col8', colorId: "pomegranate", name: "pomegranate", code: "#c0392b" }
        ];
        self.activeColorMode = self.colorModes[3];        
    }    

    MainController.prototype.openColorPicker = function () {
        var self = this;
        if (self.showColorPicker == false) {
            self.showColorPicker = true;
            self.settingsPaneColorsInitalized = true;
            self.shownColorModes = [];
            self.timeout(function () {
                angular.forEach(self.colorModes, function (cm, iter) {
                    self.shownColorModes.push(cm);
                    cm.transition = 'all ' + (50 + (150 * (iter + 1))) + 'ms' + ' ease-out';
                });
                angular.forEach(self.colorModes, function (cm, iter) {
                    self.timeout(function () {
                        var _elem = document.getElementById('color_' + cm.colorId);
                        _elem.style.transform = 'rotate(' + (-150 + (iter * 18)) + 'deg)';
                    }, 400);
                });
            }, 400);
        }
        else {
            self.showColorPicker = false;
            self.timeout(function () {
                self.settingsPaneColorsInitalized = false;
                self.shownColorModes = [];
            }, 300);
        }
    }

    MainController.prototype.closeColorPicker = function () {
        var self = this;
        self.showColorPicker = false;
        self.timeout(function () {
            self.settingsPaneColorsInitalized = false;
            self.shownColorModes = [];
        }, 300);
    }

    MainController.prototype.choseColor = function (color) {
        var self = this;
        self.activeColorMode = color;
    }   

    angular.module('Progress.UI', ['ngAnimate'])
   .controller('Progress.UI.MainController', ['$timeout', MainController]);

})()