import type { IJourney } from '../types/journey';

export const JOURNEY_MOCK: IJourney[] = [
  {
    ID: 2,
    CreatedAt: '2022-04-13T12:47:25.984752Z',
    UpdatedAt: '2022-04-13T12:48:02.98148Z',
    DeletedAt: null,
    Route: {
      ID: 2,
      CreatedAt: '2022-04-13T12:47:24.796684Z',
      UpdatedAt: '2022-04-13T12:47:24.796684Z',
      DeletedAt: null,
      Name: 'Silver route',
      Waypoints: [
        {
          ID: 4,
          CreatedAt: '2022-04-13T12:47:24.798682Z',
          UpdatedAt: '2022-04-13T12:47:24.798682Z',
          DeletedAt: null,
          Route: null,
          RouteID: 2,
          Warehouse: {
            ID: 4,
            CreatedAt: '2022-04-13T12:47:24.771438Z',
            UpdatedAt: '2022-04-13T12:47:24.771438Z',
            DeletedAt: null,
            Name: 'Date Warehouse',
          },
          WarehouseID: 4,
          Duration: 2,
        },
        {
          ID: 5,
          CreatedAt: '2022-04-13T12:47:24.801164Z',
          UpdatedAt: '2022-04-13T12:47:24.801164Z',
          DeletedAt: null,
          Route: null,
          RouteID: 2,
          Warehouse: {
            ID: 5,
            CreatedAt: '2022-04-13T12:47:24.774215Z',
            UpdatedAt: '2022-04-13T12:47:24.774215Z',
            DeletedAt: null,
            Name: 'Elderberry Warehouse',
          },
          WarehouseID: 5,
          Duration: 4,
        },
        {
          ID: 6,
          CreatedAt: '2022-04-13T12:47:24.802986Z',
          UpdatedAt: '2022-04-13T12:47:24.802986Z',
          DeletedAt: null,
          Route: null,
          RouteID: 2,
          Warehouse: {
            ID: 6,
            CreatedAt: '2022-04-13T12:47:24.77998Z',
            UpdatedAt: '2022-04-13T12:47:24.77998Z',
            DeletedAt: null,
            Name: 'Fig Warehouse',
          },
          WarehouseID: 6,
          Duration: 6,
        },
        {
          ID: 7,
          CreatedAt: '2022-04-13T12:47:24.805008Z',
          UpdatedAt: '2022-04-13T12:47:24.805008Z',
          DeletedAt: null,
          Route: null,
          RouteID: 2,
          Warehouse: {
            ID: 7,
            CreatedAt: '2022-04-13T12:47:24.7818Z',
            UpdatedAt: '2022-04-13T12:47:24.7818Z',
            DeletedAt: null,
            Name: 'Grape Warehouse',
          },
          WarehouseID: 7,
          Duration: 8,
        },
      ],
      interval: 30,
    },
    RouteID: 2,
    DepartureTime: '2022-04-13T12:47:55.984412Z',
    ItemRequests: [
      { itemId: 1, count: 1, WarehouseID: 1 },
      { itemId: 2, count: 1, WarehouseID: 2 },
      { itemId: 3, count: 1, WarehouseID: 1 },
    ],
    Place: 2,
  },
  {
    ID: 3,
    CreatedAt: '2022-04-13T12:47:56.983047Z',
    UpdatedAt: '2022-04-13T12:47:56.983047Z',
    DeletedAt: null,
    Route: {
      ID: 1,
      CreatedAt: '2022-04-13T12:47:24.783644Z',
      UpdatedAt: '2022-04-13T12:47:24.783644Z',
      DeletedAt: null,
      Name: 'Golden route',
      Waypoints: [
        {
          ID: 1,
          CreatedAt: '2022-04-13T12:47:24.786932Z',
          UpdatedAt: '2022-04-13T12:47:24.786932Z',
          DeletedAt: null,
          Route: null,
          RouteID: 1,
          Warehouse: {
            ID: 1,
            CreatedAt: '2022-04-13T12:47:24.761118Z',
            UpdatedAt: '2022-04-13T12:47:24.761118Z',
            DeletedAt: null,
            Name: 'Apple Warehouse',
          },
          WarehouseID: 1,
          Duration: 4,
        },
        {
          ID: 2,
          CreatedAt: '2022-04-13T12:47:24.790777Z',
          UpdatedAt: '2022-04-13T12:47:24.790777Z',
          DeletedAt: null,
          Route: null,
          RouteID: 1,
          Warehouse: {
            ID: 2,
            CreatedAt: '2022-04-13T12:47:24.765242Z',
            UpdatedAt: '2022-04-13T12:47:24.765242Z',
            DeletedAt: null,
            Name: 'Banana Warehouse',
          },
          WarehouseID: 2,
          Duration: 6,
        },
        {
          ID: 3,
          CreatedAt: '2022-04-13T12:47:24.794515Z',
          UpdatedAt: '2022-04-13T12:47:24.794515Z',
          DeletedAt: null,
          Route: null,
          RouteID: 1,
          Warehouse: {
            ID: 3,
            CreatedAt: '2022-04-13T12:47:24.767287Z',
            UpdatedAt: '2022-04-13T12:47:24.767287Z',
            DeletedAt: null,
            Name: 'Cherry Warehouse',
          },
          WarehouseID: 3,
          Duration: 4,
        },
      ],
      interval: 20,
    },
    RouteID: 1,
    DepartureTime: '2022-04-13T12:48:16.982679Z',
    ItemRequests: [
      { itemId: 1, count: 2, WarehouseID: 3 },
      { itemId: 2, count: 2, WarehouseID: 4 },
      { itemId: 3, count: 2, WarehouseID: 3 },
    ],
    Place: 0,
  },
  {
    ID: 4,
    CreatedAt: '2022-04-13T12:47:56.984993Z',
    UpdatedAt: '2022-04-13T12:47:56.984993Z',
    DeletedAt: null,
    Route: {
      ID: 2,
      CreatedAt: '2022-04-13T12:47:24.796684Z',
      UpdatedAt: '2022-04-13T12:47:24.796684Z',
      DeletedAt: null,
      Name: 'Silver route',
      Waypoints: [
        {
          ID: 4,
          CreatedAt: '2022-04-13T12:47:24.798682Z',
          UpdatedAt: '2022-04-13T12:47:24.798682Z',
          DeletedAt: null,
          Route: null,
          RouteID: 2,
          Warehouse: {
            ID: 4,
            CreatedAt: '2022-04-13T12:47:24.771438Z',
            UpdatedAt: '2022-04-13T12:47:24.771438Z',
            DeletedAt: null,
            Name: 'Date Warehouse',
          },
          WarehouseID: 4,
          Duration: 2,
        },
        {
          ID: 5,
          CreatedAt: '2022-04-13T12:47:24.801164Z',
          UpdatedAt: '2022-04-13T12:47:24.801164Z',
          DeletedAt: null,
          Route: null,
          RouteID: 2,
          Warehouse: {
            ID: 5,
            CreatedAt: '2022-04-13T12:47:24.774215Z',
            UpdatedAt: '2022-04-13T12:47:24.774215Z',
            DeletedAt: null,
            Name: 'Elderberry Warehouse',
          },
          WarehouseID: 5,
          Duration: 4,
        },
        {
          ID: 6,
          CreatedAt: '2022-04-13T12:47:24.802986Z',
          UpdatedAt: '2022-04-13T12:47:24.802986Z',
          DeletedAt: null,
          Route: null,
          RouteID: 2,
          Warehouse: {
            ID: 6,
            CreatedAt: '2022-04-13T12:47:24.77998Z',
            UpdatedAt: '2022-04-13T12:47:24.77998Z',
            DeletedAt: null,
            Name: 'Fig Warehouse',
          },
          WarehouseID: 6,
          Duration: 6,
        },
        {
          ID: 7,
          CreatedAt: '2022-04-13T12:47:24.805008Z',
          UpdatedAt: '2022-04-13T12:47:24.805008Z',
          DeletedAt: null,
          Route: null,
          RouteID: 2,
          Warehouse: {
            ID: 7,
            CreatedAt: '2022-04-13T12:47:24.7818Z',
            UpdatedAt: '2022-04-13T12:47:24.7818Z',
            DeletedAt: null,
            Name: 'Grape Warehouse',
          },
          WarehouseID: 7,
          Duration: 8,
        },
      ],
      interval: 30,
    },
    RouteID: 2,
    DepartureTime: '2022-04-13T12:48:26.984671Z',
    ItemRequests: [],
    Place: 0,
  },
];
