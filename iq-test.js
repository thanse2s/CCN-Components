/**
 * Created by tobi on 30.05.16.
 */
ccm.component({


    name: 'blank',

    Instance: function () {

        this.render = function(callback){

            var element = ccm.helper.element(this);

            element.html('Hallo Wolrd');

            if(callback)callback();
        }

    }

});