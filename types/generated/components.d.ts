import type { Schema, Attribute } from '@strapi/strapi';

export interface ListeWorkLine extends Schema.Component {
  collectionName: 'components_liste_work_lines';
  info: {
    displayName: 'workLine';
    description: '';
  };
  attributes: {
    work: Attribute.Relation<'liste.work-line', 'oneToOne', 'api::work.work'>;
    quantity: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }> &
      Attribute.DefaultTo<1>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'liste.work-line': ListeWorkLine;
    }
  }
}
