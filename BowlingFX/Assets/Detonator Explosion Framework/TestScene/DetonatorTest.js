private var _explosionPosition: Vector3;
private var _colliders:Collider[];
var  radius:float;
var power: float;
var size: float=25;
function Update()
{
Explode();
}

function Explode()
{
_explosionPosition = transform.position; //- Vector3.Normalize(MyDetonator().direction);
			_colliders = Physics.OverlapSphere (_explosionPosition, radius);
						for ( hit in _colliders) 
			{
				if (!hit)
				{
					continue;
				}
				
				if (hit.rigidbody)
				{

					hit.rigidbody.AddExplosionForce((power * size), _explosionPosition, (radius * size), 0);

				}
			}
}