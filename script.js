document.getElementById("button").addEventListener('click', function() {
    var input1 = document.getElementById("file1").files[0];
    var input2 = document.getElementById("file2").files[0];

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
