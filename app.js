$(document).ready(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyASorbtxPo3XGAFFw6y8Epb-Kl-hcf_1wY",
        authDomain: "trainschedule-684aa.firebaseapp.com",
        databaseURL: "https://trainschedule-684aa.firebaseio.com",
        projectId: "trainschedule-684aa",
        storageBucket: "trainschedule-684aa.appspot.com",
        messagingSenderId: "45141282344",
        appId: "1:45141282344:web:f068da74d12af63c82af1d"
    };
    firebase.initializeApp(firebaseConfig);

    var db = firebase.database()

    $('#submit').on('click', function (e) {
        e.preventDefault();
        var trainName = $('#trainName').val().trim()
        var destination = $('#dest').val().trim()
        var firstTrainTime = $('#first').val().trim()
        var frequency = $('#frequency').val().trim()

        var train = {
            name: trainName,
            dest: destination,
            time: firstTrainTime,
            frequency: frequency,
        }
        console.log(train)
        db.ref().push(train)

    })
    db.ref().on("child_added", function (snapshot) {
        console.log(snapshot.val())
        console.log(snapshot.key) //if we need the key firebase creates on push
        var thisTrain = snapshot.val()

        var newRow = $('<tr>')
        //no chaining
        var newCell = $('<td>')
        newCell.text(thisTrain.name)
        newRow.append(newCell)
        //chaining
        newRow.append($('<td>').text(thisTrain.dest))



        //put on page
        $('tbody').append(newRow)


    })

});
//moment notes
console.log(moment)
moment() //= now
let noon = '12:00'
console.log(moment(noon, "hh:mm")) // the string inside moment is how you parse the noon string
console.log(moment(noon, "MM:YY")) // the string inside moment is how you parse the noon string, now as months and years