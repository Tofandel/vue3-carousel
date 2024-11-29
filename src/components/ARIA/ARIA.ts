import { defineComponent, inject, h } from 'vue'

import { injectCarousel } from '@/injectSymbols'
import { i18nFormatter } from '@/utils/i18nFormater'

export default defineComponent({
  name: 'CarouselAria',
  setup() {
    const carousel = inject(injectCarousel)

    if (!carousel) {
      return
    }

    return () =>
      h(
        'div',
        {
          class: ['carousel__liveregion', 'carousel__sr-only'],
          'aria-live': 'polite',
          'aria-atomic': 'true',
        },
        i18nFormatter(carousel.config.i18n['itemXofY'], {
          currentSlide: carousel.currentSlide + 1,
          slidesCount: carousel.slidesCount,
        })
      )
  },
})