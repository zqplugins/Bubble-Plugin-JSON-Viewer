function(instance, properties, context) {
  let json = properties.json;
    
  try {
    let parsed = JSON.parse(json);
    instance.data.el.data = parsed;
    instance.publishState("is_valid", true)
  } catch {
	instance.publishState("is_valid", false)
};  
}