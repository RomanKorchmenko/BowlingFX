private var prefab : GameObject;
var switchablePrefabs = new List.<GameObject>();
var anchor: Transform;
var numberOfObjects = 20;
var radius = 5;
var minScale: int=10;
var maxScale: int=10;
var scale: float;
var randomPrefabs: int;
var coef: float;
var tanCoef: float=0.0001;
var RandomY:float=1;
//var ColorAst1: Color;
//var ColorAst2: Color;
//var ColorAst3: Color;
//var ColorAst4: Color;
var ZPos: float=0.3;
function Start () {
	    for (var i = 0; i < numberOfObjects; i++) {
	      
        scale = Random.Range(minScale, maxScale);
        coef=Mathf.Abs(Mathf.Sin(numberOfObjects/(i+1)));       
        if(scale < 1) scale=1;
        randomPrefabs= Random.Range(0, switchablePrefabs.Count);
        prefab = switchablePrefabs[randomPrefabs];
        var rotation = Random.rotation;
        var randomY = Random.Range(-radius/RandomY, radius/RandomY);
        var angle = i * Mathf.PI * 2 / numberOfObjects;
        //Mathf.Tan(angle*0.05)
        var pos = Vector3 (Mathf.Cos(angle*ZPos), Mathf.Tan(angle*tanCoef), Mathf.Sin(angle*ZPos)) * radius;
        var asteroid= Instantiate(prefab, Vector3(anchor.position.x+pos.x, anchor.position.y+pos.y+randomY, anchor.position.z+pos.z), rotation);
        asteroid.name="asteroid"+i;
        asteroid.transform.localScale=Vector3(scale, scale, scale);
        asteroid.transform.parent = anchor.transform;
//        var colorMy= Random.Range(1, 4);
//	    if(colorMy==1) asteroid.renderer.material.color = ColorAst1; 
//	    if(colorMy==2) asteroid.renderer.material.color = ColorAst2;
//	    if(colorMy==3) asteroid.renderer.material.color = ColorAst3;
//	    if(colorMy==4) asteroid.renderer.material.color = ColorAst4;
    }
}