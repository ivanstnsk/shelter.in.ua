import { GraphQLResolveInfo } from 'graphql';
import { AppContext } from '../server/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CitiesPayload = {
  __typename?: 'CitiesPayload';
  items: Array<City>;
  totalCount: Scalars['Int'];
};

export type CitiesResult = CitiesPayload | GenericError;

export type City = {
  __typename?: 'City';
  code: Scalars['String'];
  level1: RegionLevel;
  level2: RegionLevel;
  level3: RegionLevel;
  level4: RegionLevel;
};

export type ErrorMessage = {
  __typename?: 'ErrorMessage';
  message: Scalars['String'];
};

export type GenericError = {
  __typename?: 'GenericError';
  errors: Array<Maybe<ErrorMessage>>;
};

export type LocaleString = {
  __typename?: 'LocaleString';
  en: Scalars['String'];
  uk: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  cities: CitiesResult;
};

export type RegionLevel = {
  __typename?: 'RegionLevel';
  names: LocaleString;
  subCode: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CitiesPayload: ResolverTypeWrapper<CitiesPayload>;
  CitiesResult: ResolversTypes['CitiesPayload'] | ResolversTypes['GenericError'];
  City: ResolverTypeWrapper<City>;
  ErrorMessage: ResolverTypeWrapper<ErrorMessage>;
  GenericError: ResolverTypeWrapper<GenericError>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LocaleString: ResolverTypeWrapper<LocaleString>;
  Query: ResolverTypeWrapper<{}>;
  RegionLevel: ResolverTypeWrapper<RegionLevel>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CitiesPayload: CitiesPayload;
  CitiesResult: ResolversParentTypes['CitiesPayload'] | ResolversParentTypes['GenericError'];
  City: City;
  ErrorMessage: ErrorMessage;
  GenericError: GenericError;
  Int: Scalars['Int'];
  LocaleString: LocaleString;
  Query: {};
  RegionLevel: RegionLevel;
  String: Scalars['String'];
};

export type CitiesPayloadResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['CitiesPayload'] = ResolversParentTypes['CitiesPayload']> = {
  items?: Resolver<Array<ResolversTypes['City']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitiesResultResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['CitiesResult'] = ResolversParentTypes['CitiesResult']> = {
  __resolveType: TypeResolveFn<'CitiesPayload' | 'GenericError', ParentType, ContextType>;
};

export type CityResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  level1?: Resolver<ResolversTypes['RegionLevel'], ParentType, ContextType>;
  level2?: Resolver<ResolversTypes['RegionLevel'], ParentType, ContextType>;
  level3?: Resolver<ResolversTypes['RegionLevel'], ParentType, ContextType>;
  level4?: Resolver<ResolversTypes['RegionLevel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorMessageResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['ErrorMessage'] = ResolversParentTypes['ErrorMessage']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenericErrorResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['GenericError'] = ResolversParentTypes['GenericError']> = {
  errors?: Resolver<Array<Maybe<ResolversTypes['ErrorMessage']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocaleStringResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['LocaleString'] = ResolversParentTypes['LocaleString']> = {
  en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uk?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cities?: Resolver<ResolversTypes['CitiesResult'], ParentType, ContextType>;
};

export type RegionLevelResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['RegionLevel'] = ResolversParentTypes['RegionLevel']> = {
  names?: Resolver<ResolversTypes['LocaleString'], ParentType, ContextType>;
  subCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = AppContext> = {
  CitiesPayload?: CitiesPayloadResolvers<ContextType>;
  CitiesResult?: CitiesResultResolvers<ContextType>;
  City?: CityResolvers<ContextType>;
  ErrorMessage?: ErrorMessageResolvers<ContextType>;
  GenericError?: GenericErrorResolvers<ContextType>;
  LocaleString?: LocaleStringResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegionLevel?: RegionLevelResolvers<ContextType>;
};
