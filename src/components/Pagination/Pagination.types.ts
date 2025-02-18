import { Carousel } from '@/components/Carousel'

export type PaginationProps = {
  disableOnClick?: boolean
  paginateByItemsToShow?: boolean
  carousel?: InstanceType<typeof Carousel>
}
