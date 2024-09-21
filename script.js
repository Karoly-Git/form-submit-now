let jsScript = document.createElement('script');
jsScript.defer = true;
jsScript.src = "https://form-submit-now-e2191786113f.herokuapp.com/fsn.js";
document.head.appendChild(jsScript);

let styleLink = document.createElement('link');
styleLink.rel = "stylesheet";
styleLink.href = "https://form-submit-now-e2191786113f.herokuapp.com/fsn.css";
document.head.appendChild(styleLink);

function copyToClipboard(codeId, button) {

    if (codeId === "#code3") {
        let copyText = `<div 
id="fsn-container"
data-name=    "${tryName.value}"
data-to=      "${tryTo.value}"    
data-subject= "${trySubject.value}"
data-cc=      "${tryCc.value}"
data-bcc=     "${tryBcc.value}"
></div>`;
        let tempTextarea = document.createElement('textarea');
        tempTextarea.value = copyText;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);
    } else {
        let codeElement = document.querySelector(codeId);
        let tempTextarea = document.createElement('textarea');
        tempTextarea.value = codeElement.textContent.trim();
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);
    }

    // Change button text to "Copied"
    button.textContent = "Copied";

    // Revert back to "Copy" after 3 seconds
    setTimeout(function () {
        button.textContent = "Copy code";
    }, 3000);
}

let fsnContainer = document.getElementById("fsn-container");

let tryName = document.getElementById("try-name");
let tryTo = document.getElementById("try-to");
let trySubject = document.getElementById("try-subject");
let tryCc = document.getElementById("try-cc");
let tryBcc = document.getElementById("try-bcc");

// Function to update the data attribute when the input value changes
function updateDataAttribute(inputElement, dataAttribute) {
    if (inputElement) {
        inputElement.addEventListener('input', function () {
            fsnContainer.setAttribute(dataAttribute, inputElement.value);
        });
    }
}
// Attach event listeners to update the respective data attributes
updateDataAttribute(tryName, 'data-name');
updateDataAttribute(tryTo, 'data-to');
updateDataAttribute(trySubject, 'data-subject');
updateDataAttribute(tryCc, 'data-cc');
updateDataAttribute(tryBcc, 'data-bcc');


document.querySelector('.year').innerHTML = new Date().getFullYear();
