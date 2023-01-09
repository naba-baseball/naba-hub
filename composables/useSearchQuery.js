const useSearchQuery = () => {
    const router = useRouter();
    const query = reactive({
      search: useRoute().query.search || "",
    });
    watch(query, (query) => {
      //we don't wanna manipulate the route its technically not cached by the sw so won't work offline
      if (!useOnline().value) {
        router.replace({ query: undefined });
        return;
      }
      router.replace({ query: { search: query.search } });
    });
    return query;
  };