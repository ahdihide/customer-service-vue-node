<template>
    <div>
    <Listchat/>
    <div class="chat-input" style="padding: 10px; border-radius=0px; background-color: #91073f;">
        <b-form-group>
            <textarea class="form-control no-radius" placeholder="Tulis Pesan anda"></textarea>
        </b-form-group>
        <b-form-group>
            <button class="btn btn-primary btn-sm no-radius">Send</button>
        </b-form-group>
    </div>
        
    </div>
</template>

<script>
import Listchat from './Listchat'
export default{
    components : {
        Listchat
    }
}
</script>
<style>
.no-radius{
    border-radius: 0px;
}
</style>