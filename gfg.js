// console.log(null ?? "default");
// console.log(undefined ?? "default");
// console.log(false ?? "default");
<html>
<head>
</head>
<body>
    <button onclick="create()">
        Click Here!
    </button>

    <script>
        function create() {
            let geeks = document.createElement('geeks');
            geeks.textContent = "Geeksforgeeks";
            geeks.setAttribute('class', 'note');
            document.body.appendChild(geeks);
        }
    </script>
</body>
</html>