<template>
    <div class="description__part">
        <span class="description">{{ displayedText }}</span>
    </div>
</template>

<script>
export default {
    name: 'LimitedText',
    props: {
        text: {
            type: String,
            required: true
        },
        limit: {
            type: Number,
            default: 210
        }
    },
    data() {
        return {
            limited: true
        }
    },
    computed: {
        overflowLimit() {
            return this.text.length > this.limit;
        },
        displayedText() {
            if (!this.overflowLimit || !this.limited) return this.text;
            return this.text.substring(0, this.limit - 3) + '...';
        }
    },
}
</script>

<style>
.description {
    font-size: 16px;
    font-weight: 400;
}

.description>span {
    cursor: pointer;
}
</style>