
# 🐟 benevolent shad

*webgl glsl shader development laboratory*

🕹️ [shad.benevolent.games](https://shad.benevolent.games)

**how to use shad:**

1. make a directory on your machine, named `shader` or something
1. download [example.fragment.glsl](./s/example.fragment.glsl) and [example.vertex.glsl](./s/example.vertex.glsl) into the directory
1. also put any textures you want in there
1. open a terminal in that directory
1. run an http-server for that directory with terminal command `npx http-server --cors`
1. browse to the web app: [shad.benevolent.games](https://shad.benevolent.games)
1. in settings insert shader urls `http://localhost:8080/example.vertex.glsl`, `http://localhost:8080/example.fragment.glsl`
1. you can insert similar links for your textures
1. click `rebuild material`
1. edit your `example.material.glsl`, save, and hit `rebuild material` -- repeat until your shader is pretty

**recommended:**

- 🦓 consider using [z-glsl](https://github.com/benevolent-games/z-glsl) to organize your glsl shader code
