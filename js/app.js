var app = new Vue({
    el : "#app",
    data : {
        newNoteStatus : false,
        countNote : 0,
        noteColor: [
            {color: "#ffffff"},
            {color: "#f28b82"},
            {color: "#fbbc04"},
            {color: "#fff475"},
            {color: "#ccff90"},
            {color: "#a7ffeb"},
            {color: "#cbf0f8"},
            {color: "#aecbfa"},
            {color: "#d7aefb"},
            {color: "#fdcfe8"},
            {color: "#e6c9a8"},
            {color: "#e8eaed"}
        ],
        dataListNote : [
            {time: "00:00:00", date: "2020-02-02", title: "note title", content: "note conetnt", color: "#ffffff"},
            {time: "00:00:00", date: "2020-02-02", title: "note title", content: "note conetnt", color: "#ffffff"},
            {time: "00:00:00", date: "2020-02-02", title: "note title", content: "note conetnt", color: "#ffffff"}
        ],
        newNote: {title: "", content: "", color: "#ffffff"},
        test : ""
    },
    mounted () {
        this.checkCountNote();
    },
    methods : {
        checkCountNote: function(){
            return this.countNote = this.dataListNote.length;
        },
        closeNewNote: function(){
            this.newNoteStatus = false;
            this.newNote.title = "";
           this.newNote.content = "";
           document.getElementsByClassName("content")[0].innerHTML = this.newNote.content;
            this.newNote.color = "#ffffff";
        },
        getContent: function(e) {
            this.newNote.content = e.target.innerHTML;
        },
        nextInput: function(){
            document.getElementsByClassName("content")[0].focus();
        }
    }
})
