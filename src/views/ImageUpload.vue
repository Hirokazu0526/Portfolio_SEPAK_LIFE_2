<template>
  <div class="imageupload">
    <div class="image-entry">
      <h2>画像登録</h2>
      <div v-if="gallery.image">
        <img class="preview-image" :src="gallery.image" alt="" />
      </div>
      <div class="entry-input-row">
        <span class="enrty-label">画像</span
        ><input v-if="reset" @change="upload" type="file" />
      </div>
      <div class="entry-input-row">
        <span class="enrty-label">タイトル</span
        ><input type="text" v-model="gallery.imageTitle" />
      </div>
      <div class="entry-input-row">
        <span class="enrty-label">クレジット</span>
        <input type="text" v-model="gallery.credit" />
      </div>
      <div>
        <button class="entry-btn" @click="entryGallery()">登録</button>
      </div>

      <div class="message">
        <div v-if="entryDocId">
          FirestoreにDocId:{{ entryDocId }}で登録しました。
        </div>
        <div v-if="errorMessage">
          エラーメッセージ:
          {{ errorMessage }}
        </div>
      </div>
      <br />
      <button @click="logOut">Logout</button>
    </div>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
  data: () => ({
    gallery: {
      imageTitle: "",
      image: "",
      credit: "",
      id: "",
    },
    entryDocId: "",
    errorMessage: "",
    reset: true,
  }),
  methods: {
    upload(e) {
      const file = e.target.files[0];

      if (!file.type.includes("image")) {
        this.errorMessage = "画像を指定してください";
        this.inputFileReset();
        return;
      }

      const storageRef = firebase.storage().ref(file.name);
      storageRef.put(file).then(() => {
        firebase
          .storage()
          .ref(file.name)
          .getDownloadURL()
          .then((url) => {
            this.gallery.image = url;
          })
          .catch((err) => {
            this.errorMessage = err;
          });
      });
    },
    inputFileReset() {
      this.reset = false;
      this.$nextTick(function() {
        this.reset = true;
      });
    },
    entryGallery() {
      this.errorMessage = "";
      if (!this.gallery.imageTitle || !this.gallery.credit) {
        this.errorMessage = "タイトルとクレジットは必須です";
        return;
      }

      const db = firebase.firestore();
      const dbGalleries = db.collection("gallery");
      dbGalleries
        .add({
          imageTitle: this.gallery.imageTitle,
          credit: this.gallery.credit,
          image: this.gallery.image,
          id: "",
        })
        .then((ref) => {
          this.entryDocId = ref.id;
          this.gallery.imageTitle = "";
          this.gallery.credit = "";
          this.gallery.image = "";

          this.inputFileReset();
        })
        .catch((err) => {
          this.errorMessage = err;
        });
    },

    logOut: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style>
h2 {
  margin-bottom: 20px;
}

.image-entry {
  width: 600px;
  padding: 16px;
  margin: auto;
  margin-top: 16px;
  margin-bottom: 16px;
  box-shadow: 1px 1px 4px 1px rgb(218, 218, 218);
  color: #333;
  background: #fff;
}

.preview-image {
  width: 50%;
  height: 50%;
  object-fit: cover;
}

.entry-input-row {
  padding: 12px;
}

.enrty-label {
  width: 100px;
  display: inline-block;
  vertical-align: top;
}

input[type="text"] {
  width: 200px;
  font-size: 18px;
}
textarea {
  width: 200px;
  font-size: 18px;
}

.entry-btn {
  width: 200px;
  font-size: 18px;
  border-radius: 30px;
  padding: 4px;
  display: block;
  margin: auto;
  margin-top: 32px;
  cursor: pointer;
  color: white;
  background-color: cornflowerblue;
  border: 0px;
}

.message {
  margin: 12px;
  padding: 12px;
}

@media screen and (max-width: 599px) {
  .imageupload {
    width: 100%;
  }

  .image-entry {
    width: 80%;
  }
}
</style>
