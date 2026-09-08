import Pagination from './Pagination.svelte';
import Link from './Link.svelte';

const PaginationComponent = Object.assign(Pagination, {
	Link: Link
});

export default PaginationComponent;
