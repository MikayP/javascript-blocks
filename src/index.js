wp.blocks.registerBlockType('plugin/test-block',{
    title:"Test Title",
    icon: "smiley",
    category: "common",
    attributes: {
        skyColor: { type: "string"},
        grassColor: {type: "string"}
    },
    edit: function(props){
        // seen in admin
        // type of html elements you want to create
        // 2nd rule to describe element. such as adding a class or inline style, or null
        // 3rd is text you want in there
        // value needed to save on reload of admin
        // on change needed to see change of values in guttenberg
        function updateSkyColor(event){
            props.setAttributes({skyColor: event.target.value})
        }    
        function updateGrassColor(event){
            props.setAttributes({grassColor: event.target.value})
        }
        return (
            <div>
                <input type="text" placeholder="sky color" value={props.attributes.skyColor} onChange={updateSkyColor} />
                <input type="text" placeholder="grass color" value={props.attributes.GrassColor} onChange={updateGrassColor} />
        </div>

        )
    },

    save: function(props){
        // seen live
            // 3rd is text you want in there
            return (
               null
            )
    }
})