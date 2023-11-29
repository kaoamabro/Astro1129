function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script is:inline src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script is:inline src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script is:inline src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Dancing+Script:wght@400;700&family=Noto+Sans+TC:wght@400;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Dancing+Script:wght@400;700&family=Lobster&family=Noto+Sans+TC:wght@400;900&display=swap');
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        header {
            z-index: 1000;
        }
        
        header,section {
            position: relative;
            width: 100%;
            height: 100vh;
            background-color: #123;
        }
        img {
            position: absolute;
        }
        
        #first {
            background-color: #ccc;
            .right {
                top: 10%;
                right: 15%;
                z-index: 20;
                filter: drop-shadow(8px 8px 10px rgb(0 0 0 / .2));
            }
            .left {
                bottom: 10%;
                left:15%;
                z-index: 10;
                filter: drop-shadow(8px 8px 10px rgb(0 0 0 / .2));
            }
            .title {
                position: absolute;
                width: fit-content;
                height: fit-content;
                inset:0;
                margin: auto;
                z-index: 15;
                filter: drop-shadow(8px 8px 10px rgb(0 0 0 / .6));
                font-family: 'Caveat', serif;
            }
        }
        #second {
            background-color: #088;
            .right {
                top: 10%;
                right: 15%;
                z-index: 20;
                filter: drop-shadow(8px 8px 10px rgb(0 0 0 / .3));
            }
            .left {
                bottom: 10%;
                left:15%;
                z-index: 10;
                filter: drop-shadow(8px 8px 10px rgb(0 0 0 / .3));
            }
            .title {
                position: absolute;
                width: fit-content;
                height: fit-content;
                inset:0;
                margin: auto;
                z-index: 15;
                filter: drop-shadow(8px 8px 10px rgb(0 0 0 / .4));
                font-family: 'Lobster', serif;
                color: #e04;
            }
        }
        footer {
            height: 100vh;
        }
    </style>
</head>
<body>
    <header>
        <h1>PARALLAX 視差滾動</h1>
    </header>
    <section id="first">
        <img src="../images/01.png" alt="" class="right w-[250px] sm:w-[400px]">
        <img src="../images/02.png" alt="" class="left w-[250px] sm:w-[400px]">
        <h2 class="title text-5xl sm:text-9xl">Air Pods Pro</h2>
    </section>
    <section id="second">
        <img src="../images/01.png" alt="" class="right w-[250px] sm:w-[400px]">
        <img src="../images/02.png" alt="" class="left w-[250px] sm:w-[400px]">
        <h2 class="title text-5xl sm:text-9xl">Air Pods Pro</h2>
    </section>
    <footer></footer>
</body>
</html>`
	}
render["astro:html"] = true;

export { render as default };
