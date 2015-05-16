using UnityEditor;
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class Lightmap2Vert : MonoBehaviour
{

	[MenuItem ("GameObject/Lightmap to Vertex Color")]
	static void DoLightmap2Vert ()
	{
		
		GameObject[] gos = Selection.gameObjects;
		
		// Iterate over selected GameObjects
		foreach (GameObject subject in gos) {
			
			
			/*
			 * MeshRenderers hold the lightmap index that we're interested in.  Meshes
			 * hold the UV data that we need to use to read the lightmap, and the colors array
			 * that we want to populate with our samples.
			 * 
			 * In the simplest case, the number of renderers and filters is the same, and we
			 * can use the same index to retrieve them in the order we found them.
			 * 
			 * SkinnedMeshRenderers hold both pieces of information in one place
			 * 
			 */
			
			
			/*
			 * Whether we start with a bunch of MR/MF pairs or SMRs, we want to reduce that to 
			 * a list of meshes and renderers for the sake of having only one block of code.
			 */
			List<Mesh> meshList = new List<Mesh>();
			List<Renderer> renderList = new List<Renderer>();
			
		
			// Test for SMF first
			SkinnedMeshRenderer[] smrs = subject.GetComponentsInChildren<SkinnedMeshRenderer>();
			
			if (smrs.Length > 0) {
				
				// SMRs were found, so break them into mesh and renderer elements for each list
				foreach (SkinnedMeshRenderer smr in smrs) {
					meshList.Add( smr.sharedMesh );
					renderList.Add( smr.renderer );
				}
				
			} else {
				
				MeshRenderer[] mrs  = subject.GetComponentsInChildren<MeshRenderer>();
				MeshFilter[]   mfs  = subject.GetComponentsInChildren<MeshFilter>();
				
				// No SMR was found, so directly add the detected renderers and meshes
				
				// Renderers are simple so just add them all
				renderList.AddRange( mrs );
				
				// We need meshes, not meshfilters, so pull those out individually
				foreach (MeshFilter mf in mfs)
					meshList.Add( mf.sharedMesh );
				
			}
			
			
			/*
			 * We should now have a list of all filters and renderers for the current GameObject.
			 * 
			 * For my tests, these were very simple objects, in which each child GO had only one
			 * SMR or one MR/MF pair.  If you have a more complex scene, this code may make invalid 
			 * assumptions.
			 */
			
			// Loop over the MR/MF pairs, assuming they are paired by index (just one of each per child GO)
			Mesh[] meshes = meshList.ToArray();
			Renderer[] renderers = renderList.ToArray();
			
			//Debug.Log(meshes.Length);
			//Debug.Log(renderers.Length);
			
			
			int i, j = 0;
			int l = meshes.Length; // Meshes.Length must equal Renderers.Length with these assumptions
			for( i=0; i<l; i++ ) {
				Mesh mesh = meshes[ i ];
				Renderer renderer = renderers[ i ];
				
				Vector2[] uvs    = mesh.uv2;
				Color[]   colors = new Color[ uvs.Length ]; // We're not modifying, just blinding overwriting, and some meshes won't have .color
				
				LightmapData lmData = LightmapSettings.lightmaps[ renderer.lightmapIndex ];
				Vector4 offset = renderer.lightmapTilingOffset;
				Texture2D lm = lmData.lightmapFar;
				
				//Debug.Log( renderer.lightmapIndex );
				
				int uvl = uvs.Length;
				for ( j=0; j<uvl; j++) {
					
					Vector2 uv = uvs[ j ];
					
					colors[ j ] = lm.GetPixelBilinear( (offset.x * uv.x) + offset.z, (offset.y * uv.y) + offset.w );
					
				}
				
				mesh.colors = colors;
				
			}
			
			
		}
		
	}
	
}