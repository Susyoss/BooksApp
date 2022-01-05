templateOf: {
    ...
    bookingWidget: '#template-booking-widget',
},

containerOf: {
    ...
    pages: '#pages',
    booking: '.booking-wrapper',
  },

  export const select = {
    ...
    widgets: {
        datePicker: {
            wrapper: '.date-picker',
            input: `input[name="date"]`,
        },
        hourPicker: {
            wrapper: '.hour-picker',
            input: 'input[type="range"]',
            output: '.output',
        },
    },
    booking: {
        peopleAmount: '.people-amount',
        hoursAmount: '.hours-amount',
        tables: '.floor-plan .table',
    },
    nav: {
        links: '.main-nav a',
    },
}

booking: {
    loading: 'loading',
    tableBooked: 'booked',
},
nav: {
    active: 'active',
},
pages: {
    active: 'active',
}

export const settings = {
    ...
    hours: {
        open: 12,
        close: 24,
    },
    datePicker: {
        maxDaysInFuture: 14,
    },
    booking: {
        tableIdAttribute: 'data-table',
    },
    db: {
        ...
        url: '//localhost:3131',
        product: 'product',
        order: 'order',
        booking: 'booking',
        event: 'event',
        dateStartParamKey: 'date_gte',
        dateEndParamKey: 'date_lte',
        notRepeatParam: 'repeat=false',
        repeatParam: 'repeat_ne=false',
    },
  },

  export const templates = {
    ...
    bookingWidget: Handlebars.compile(document.querySelector(select.templateOf.bookingWidget).innerHTML),
};