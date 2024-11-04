let color;

        document.addEventListener('keydown', (event) => {
            if (event.key === 'a') {
                color = 'pink';
                document.getElementById('key').style.backgroundColor = color;
            } else if (event.key === 's') {
                color = 'orange';
                document.getElementById('key').style.backgroundColor = color;
            } else if (event.key === 'd') {
                color = 'lightblue';
                document.getElementById('key').style.backgroundColor = color;
            } else if (event.key === 'q') {
                createNewDiv('purple');
            } else if (event.key === 'w') {
                createNewDiv('gray');
            } else if (event.key === 'e') {
                createNewDiv('brown');
            }
        });

        function createNewDiv(color) {
            const newDiv = document.createElement('div');
            newDiv.className = 'new-div';
            newDiv.style.backgroundColor = color;
            document.body.appendChild(newDiv);
        }