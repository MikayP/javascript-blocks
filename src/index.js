wp.blocks.registerBlockType('plugin/card-block',{
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
        function updateBackground(event){ 
            props.setAttributes({skyColor: event.target.value})
        }    
        function updateGrassColorr(event){
            props.setAttributes({grassColor: event.target.value})
        }
        return (
            <div>
                <input type="text" placeholder="skky color" value={props.attributes.Background} onChange={updateSkyColorr} />
                <input type="text" placeholder="graass color" value={props.attributes.GrassColorr} onChange={updateGrassColorr} />
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

wp.blocks.registerBlockType('plugin/background-card-block',{
    title:"Background Card",
    icon: "smiley",
    category: "common",
    attributes: {
        Background: { type: "string"},
        animation: { type: "string"},
        content: {type: "string"},
        url: {type: "string"},
        url_copy: {type: "string"},
        // background_light: {type: "string"},
        background_checkbox: {type: "boolean"}
    },
    edit: function(props){
        // seen in admin
        // type of html elements you want to create
        // 2nd rule to describe element. such as adding a class or inline style, or null
        // 3rd is text you want in there
        // value needed to save on reload of admin
        // on change needed to see change of values in guttenberg
        function background_image(event){
            props.setAttributes({Background: event.target.value})
        }    
        function content(event){
            props.setAttributes({content: event.target.value})
        }
        function animation(event){
            props.setAttributes({animation: event.target.value})
        }
        function url(event){
            props.setAttributes({url: event.target.value})
        }
        function url_copy(event){
            props.setAttributes({url_copy: event.target.value})
        }

        function background_checkbox(event){
            props.setAttributes({background_checkbox: event.target.checked})
        }

        return (

            <div>
                  <input type="checkbox" checked={props.attributes.background_checkbox} onChange={background_checkbox} /> <span>light background?</span>
                  <input type="text" placeholder="background url" value={props.attributes.Background} onChange={background_image} />
                 <input type="text" placeholder="content" value={props.attributes.content} onChange={content} />
                 <input type="text" placeholder="animation" value={props.attributes.animation} onChange={animation} />
                 <input type="text" placeholder="url (optional)" value={props.attributes.url} onChange={url} />
                 <input type="text" placeholder="url_copy (optional)" value={props.attributes.url_copy} onChange={url_copy} />
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