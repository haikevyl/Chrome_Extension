var app = new Vue({
    el : "#app",
    data : {
        countNote : 0,
        color: [
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
        noteItems : [
            {time: "00:00:00", date: "2020-02-02", title: "note title", content: "note conetnt", color: "#ffffff"},
            {time: "00:00:00", date: "2020-02-02", title: "note title", content: "note conetnt", color: "#ffffff"},
            {time: "00:00:00", date: "2020-02-02", title: "note title", content: "note conetnt", color: "#ffffff"}
        ],
        newNoteStatus : false,
        newNoteItemTitle : "",
        newNoteItemContent : "",
        newNoteItemColor : "#ffffff"
    },
    mounted () {
      
    },
    methods : {
       get_time: function(){
           return new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();  
       },
       get_date: function(){
           return new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" +  new Date().getDate();
       },
       get_contentNote: function(e){
           this.newNoteItemContent = e.target.innerHTML;
       },
       ressetQuery: function(){
        this.newNoteItemTitle = "";
        this.newNoteItemContent = "";
        this.newNoteItemColor = "";
        document.getElementsByClassName("content")[0].innerHTML = "";
        this.newNoteStatus = false;
       },
       addNoteItem: function(){
        if(this.newNoteItemContent.length > 0 || this.newNoteItemTitle.length > 0){
            this.noteItems.unshift({
                time : this.get_time(),
                date : this.get_date(),
                title : this.newNoteItemTitle,
                content : this.newNoteItemContent,
                color : this.newNoteItemColor
           });
           this.ressetQuery();
           console.log(this.noteItems.length);
        }
       },
       closeNewNote: function(){
            if(this.newNoteItemContent.length > 0 || this.newNoteItemTitle.length > 0){
                this.addNoteItem()
            }else{
                this.ressetQuery();
            }
       }
    }
})
