<template>
  <div class="theme-container no-sidebar">
    <main class="page">
      <div class="theme-default-content content__default">
        <ParentLayout>
          <template v-slot:page>
            <ul class="article-list">

              <li v-for="post in posts" :key="post.key">
                <h3>
                  <template v-if="post.frontmatter.date">
                    {{ format(new Date(post.frontmatter.date), 'MMM dd, yyyy') }}
                  </template>
                </h3>
                <div class="list-item">
                  <router-link :to="post.path" class="title-link">{{
                    post.title
                  }}</router-link>
                </div>
              </li>
              <!-- old posts -->
              <li v-for="blog in blogs" :key="blog.key">
                <h3>
                  <template v-if="blog.frontmatter.date">
                    {{ format(new Date(blog.frontmatter.date), 'MMM dd, yyyy') }}
                  </template>
                </h3>
                <div class="list-item">
                  <router-link :to="blog.path" class="title-link">{{
                    blog.title
                  }}</router-link>
                </div>
              </li>
            </ul>
          </template>
        </ParentLayout>
      </div>
    </main>
  </div>
</template>

<script>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import format from 'date-fns/format';
import { usePages as useBlogs } from "@temp/blogs";
import { usePages as usePosts } from "@temp/posts";
export default {
  components: { ParentLayout },
  setup() {
    const blogs = useBlogs();
    const posts = usePosts();
    return { blogs, posts };
  },
  methods: {
    format,
  },
};
</script>