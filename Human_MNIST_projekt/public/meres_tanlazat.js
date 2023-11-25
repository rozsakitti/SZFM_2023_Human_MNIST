fetch("/eredmeny").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          if (data.length > 0) {
            var temp = "";
            data.forEach((itemData) => {
              temp += "<tr>";
              temp += "<td>" + itemData.ID + "</td>";
              temp += "<td>" + itemData.pictureurl + "</td>";
              temp += "<td>" + itemData.answer + "</td>";
              temp += "<td>" + itemData.UID + "</td>";
              temp += "<td>" + itemData.testID + "</td></tr>";
            });
            document.getElementById('data').innerHTML = temp;
          }
        }
      )
    }
  )