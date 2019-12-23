$(document).ready(function() {
    $("#btnSuccess").click(function() {
      createSuccessToast("Everything is fine.");
    });
  
    $("#btnError").click(function() {
      createErrorToast("Something went wrong.");
    });
  });
  
  function createSuccessToast(toastMessage) {
    createToast(true, toastMessage);
  }
  
  function createErrorToast(toastMessage) {
    createToast(false, toastMessage);
  }
  
  function createToast(isSuccess, toastMessage) {
    var toastContainer = createToastContainer(isSuccess);
    createToastHeader(toastContainer, isSuccess);
    createToastContent(toastContainer, toastMessage);
    initToast(toastContainer);
    destroyToast(toastContainer);
  }
  
  function createToastContainer(isSuccess) {
    var toastContainer = $("<div></div>");
    toastContainer.addClass("toastContainer");
    if (isSuccess) {
      toastContainer.addClass("toastContainerSuccess");
    } else {
      toastContainer.addClass("toastContainerError");
    }
    return toastContainer;
  }
  
  function createToastHeader(toastContainer, isSuccess) {
    var toastHeader = $("<div></div>");
    toastHeader.addClass("toastHeader");
    toastHeader.html(isSuccess ? "Success !" : "Error !");
    toastContainer.append(toastHeader);
  }
  
  function createToastContent(toastContainer, toastMessage) {
    var toastContent = $("<div></div>");
    toastContent.addClass("toastContent");
    toastContent.html(toastMessage);
    toastContainer.append(toastContent);
  }
  
  function initToast(toastContainer) {
    toastContainer.hide(function() {
      $("#toastsContainer").append(toastContainer);
      toastContainer.fadeIn(300);
    });
  }
  
  function destroyToast(toastContainer) {
    setTimeout(function() {
      toastContainer.fadeOut(300, function() {
        toastContainer.remove();
      });
    }, 2500);
  }
  var styles = '#toastsContainer{position: absolute;bottom: 50px;left: 40%;width: 330px; height: 100px; text-align: center; color: black; margin-bottom: 10px;font-size: 15px;color: white;}.toastContainer{padding: 5px;border-radius: 5px;}.toastContainerSuccess{ background-color: #689f38;}.toastContainerError{background-color: #ff3d00;}.toastContent{}';
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
  
/*A demo html file
  <html>
    <head>
        <title>
            Toasts
        </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js">
        </script>
        <script src="custom_alert.js">
        </script>
    </head>
    <body>
        <button id="btnSuccess">
                Success
                </button>
                
                <button id="btnError">
                Error
                </button>
                
                <div id="toastsContainer"></div>
    </body>
</html>
*/ 
