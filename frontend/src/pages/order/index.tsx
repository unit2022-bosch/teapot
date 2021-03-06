import React from 'react';
import type { FC } from 'react';
import { Center, Heading, VStack } from '@chakra-ui/react';
import { differenceInMinutes, addMinutes } from 'date-fns';

import { useGetJourneysQuery } from '../../api/items/getJourney';
import { MaterialTable } from '../../components/MaterialTable';
import { Card } from '../../components/Card';
import { OrderForm } from '../../components/OrderForm';
import { SEO } from '../../components/Seo';
import { NavbarLayout } from '../../components/NavbarLayout';

export const OrderPage: FC = () => {
  const closestArrival = new Date();
  const nextDeparture = addMinutes(closestArrival, 10);
  const { data: journeys } = useGetJourneysQuery({});

  return (
    <NavbarLayout>
      <SEO title="Order" description="creating new orders" />
      <Center pt={16}>
        <VStack spacing={8}>
          <Heading>
            Nejblizsi prijezd:{' '}
            {closestArrival.toLocaleTimeString(undefined, {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Heading>
          <Heading size="md" as="h3">
            mate {differenceInMinutes(nextDeparture, closestArrival)} minut na
            objednani (
            {nextDeparture.toLocaleTimeString(undefined, {
              hour: '2-digit',
              minute: '2-digit',
            })}
            )
          </Heading>
          <Card>
            <OrderForm />
          </Card>
          <Card>
            <MaterialTable
              data={journeys?.journeys ?? []}
              selectedWarehouse={1}
            />
          </Card>
        </VStack>
      </Center>
    </NavbarLayout>
  );
};
