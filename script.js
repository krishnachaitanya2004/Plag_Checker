document.getElementById("button").addEventListener('click', function() {
    var input1 = document.getElementById("file1").files[0];
    var input2 = document.getElementById("file2").files[0];

    if (!input1 || !input2) {
        alert("Please upload both files");
        return;
    }
    const allowedExtensions = ['.txt', '.js', '.cpp', '.py', '.java', '.css', '.html'];
    const file1Ext = input1.name.substring(input1.name.lastIndexOf('.'));
    const file2Ext = input2.name.substring(input2.name.lastIndexOf('.'));

    if (!allowedExtensions.includes(file1Ext) || !allowedExtensions.includes(file2Ext)) {
        alert('Invalid file type. Only .txt, .js, .cpp, .py, .java, .css, .html are allowed.');
        return;
    }

    var reader1 = new FileReader();
    var reader2 = new FileReader();
reader1.readAsText(input1);
    reader1.onload = function(event) {
        var content1 = event.target.result;
        
        reader2.readAsText(input2);
        reader2.onload = function(event) {
            var content2 = event.target.result;

            var score = 0;
            var maxSize = Math.max(content1.length, content2.length);

            for (var i = 0; i < maxSize; i++) {
                if (content1[i] === content2[i]) {
                    score++;
                }
            }

            var similarity = (score / maxSize) * 100;
            var resultElement = document.getElementById('plagiarismResult');
            if (similarity > 50) {
                resultElement.textContent = "High similarity detected. Possible plagiarism. Similarity between files: " + similarity.toFixed(2) + "%";
            }

            else if (similarity ==0) {
                resultElement.textContent = "Congrats! No plagiarism detected. Similarity between files: " + similarity.toFixed(2) + "%";
            }
            else{
                resultElement.textContent = "Low similarity detected. Similarity between files: " + similarity.toFixed(2) + "%";
            }
        };
    };

    
});
