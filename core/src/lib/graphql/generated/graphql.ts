export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type About = {
  readonly __typename?: 'About';
  readonly content: Scalars['JSON']['output'];
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly locale?: Maybe<Scalars['String']['output']>;
  readonly localizations: ReadonlyArray<Maybe<About>>;
  readonly localizations_connection?: Maybe<AboutRelationResponseCollection>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AboutInput = {
  readonly content?: InputMaybe<Scalars['JSON']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type AboutRelationResponseCollection = {
  readonly __typename?: 'AboutRelationResponseCollection';
  readonly nodes: ReadonlyArray<About>;
};

export type BooleanFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly contains?: InputMaybe<Scalars['Boolean']['input']>;
  readonly containsi?: InputMaybe<Scalars['Boolean']['input']>;
  readonly endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  readonly eq?: InputMaybe<Scalars['Boolean']['input']>;
  readonly eqi?: InputMaybe<Scalars['Boolean']['input']>;
  readonly gt?: InputMaybe<Scalars['Boolean']['input']>;
  readonly gte?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Boolean']['input']>;
  readonly lte?: InputMaybe<Scalars['Boolean']['input']>;
  readonly ne?: InputMaybe<Scalars['Boolean']['input']>;
  readonly nei?: InputMaybe<Scalars['Boolean']['input']>;
  readonly not?: InputMaybe<BooleanFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Boolean']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  readonly __typename?: 'Category';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly locale?: Maybe<Scalars['String']['output']>;
  readonly localizations: ReadonlyArray<Maybe<Category>>;
  readonly localizations_connection?: Maybe<CategoryRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly posts: ReadonlyArray<Maybe<Post>>;
  readonly posts_connection?: Maybe<PostRelationResponseCollection>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryLocalizations_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryPosts_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntityResponseCollection = {
  readonly __typename?: 'CategoryEntityResponseCollection';
  readonly nodes: ReadonlyArray<Category>;
  readonly pageInfo: Pagination;
};

export type CategoryFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<CategoryFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly locale?: InputMaybe<StringFilterInput>;
  readonly localizations?: InputMaybe<CategoryFiltersInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<CategoryFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<CategoryFiltersInput>>>;
  readonly posts?: InputMaybe<PostFiltersInput>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly posts?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryRelationResponseCollection = {
  readonly __typename?: 'CategoryRelationResponseCollection';
  readonly nodes: ReadonlyArray<Category>;
};

export type DateTimeFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly contains?: InputMaybe<Scalars['DateTime']['input']>;
  readonly containsi?: InputMaybe<Scalars['DateTime']['input']>;
  readonly endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  readonly eq?: InputMaybe<Scalars['DateTime']['input']>;
  readonly eqi?: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte?: InputMaybe<Scalars['DateTime']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly lt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte?: InputMaybe<Scalars['DateTime']['input']>;
  readonly ne?: InputMaybe<Scalars['DateTime']['input']>;
  readonly nei?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not?: InputMaybe<DateTimeFilterInput>;
  readonly notContains?: InputMaybe<Scalars['DateTime']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  readonly __typename?: 'DeleteMutationResponse';
  readonly documentId: Scalars['ID']['output'];
};

export const enum Enum_Reaction_Type {
  Dislike = 'dislike',
  Like = 'like'
};

export type FileInfoInput = {
  readonly alternativeText?: InputMaybe<Scalars['String']['input']>;
  readonly caption?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly contains?: InputMaybe<Scalars['Float']['input']>;
  readonly containsi?: InputMaybe<Scalars['Float']['input']>;
  readonly endsWith?: InputMaybe<Scalars['Float']['input']>;
  readonly eq?: InputMaybe<Scalars['Float']['input']>;
  readonly eqi?: InputMaybe<Scalars['Float']['input']>;
  readonly gt?: InputMaybe<Scalars['Float']['input']>;
  readonly gte?: InputMaybe<Scalars['Float']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Float']['input']>;
  readonly lte?: InputMaybe<Scalars['Float']['input']>;
  readonly ne?: InputMaybe<Scalars['Float']['input']>;
  readonly nei?: InputMaybe<Scalars['Float']['input']>;
  readonly not?: InputMaybe<FloatFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Float']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['Float']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = About | Category | I18NLocale | Post | Reaction | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | Rule | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  readonly __typename?: 'I18NLocale';
  readonly code?: Maybe<Scalars['String']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  readonly __typename?: 'I18NLocaleEntityResponseCollection';
  readonly nodes: ReadonlyArray<I18NLocale>;
  readonly pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code?: InputMaybe<StringFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<I18NLocaleFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly contains?: InputMaybe<Scalars['ID']['input']>;
  readonly containsi?: InputMaybe<Scalars['ID']['input']>;
  readonly endsWith?: InputMaybe<Scalars['ID']['input']>;
  readonly eq?: InputMaybe<Scalars['ID']['input']>;
  readonly eqi?: InputMaybe<Scalars['ID']['input']>;
  readonly gt?: InputMaybe<Scalars['ID']['input']>;
  readonly gte?: InputMaybe<Scalars['ID']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly lt?: InputMaybe<Scalars['ID']['input']>;
  readonly lte?: InputMaybe<Scalars['ID']['input']>;
  readonly ne?: InputMaybe<Scalars['ID']['input']>;
  readonly nei?: InputMaybe<Scalars['ID']['input']>;
  readonly not?: InputMaybe<IdFilterInput>;
  readonly notContains?: InputMaybe<Scalars['ID']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['ID']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly contains?: InputMaybe<Scalars['Int']['input']>;
  readonly containsi?: InputMaybe<Scalars['Int']['input']>;
  readonly endsWith?: InputMaybe<Scalars['Int']['input']>;
  readonly eq?: InputMaybe<Scalars['Int']['input']>;
  readonly eqi?: InputMaybe<Scalars['Int']['input']>;
  readonly gt?: InputMaybe<Scalars['Int']['input']>;
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Int']['input']>;
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
  readonly ne?: InputMaybe<Scalars['Int']['input']>;
  readonly nei?: InputMaybe<Scalars['Int']['input']>;
  readonly not?: InputMaybe<IntFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Int']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['Int']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly contains?: InputMaybe<Scalars['JSON']['input']>;
  readonly containsi?: InputMaybe<Scalars['JSON']['input']>;
  readonly endsWith?: InputMaybe<Scalars['JSON']['input']>;
  readonly eq?: InputMaybe<Scalars['JSON']['input']>;
  readonly eqi?: InputMaybe<Scalars['JSON']['input']>;
  readonly gt?: InputMaybe<Scalars['JSON']['input']>;
  readonly gte?: InputMaybe<Scalars['JSON']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly lt?: InputMaybe<Scalars['JSON']['input']>;
  readonly lte?: InputMaybe<Scalars['JSON']['input']>;
  readonly ne?: InputMaybe<Scalars['JSON']['input']>;
  readonly nei?: InputMaybe<Scalars['JSON']['input']>;
  readonly not?: InputMaybe<JsonFilterInput>;
  readonly notContains?: InputMaybe<Scalars['JSON']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  readonly changePassword?: Maybe<UsersPermissionsLoginPayload>;
  readonly createCategory?: Maybe<Category>;
  readonly createPost?: Maybe<Post>;
  readonly createReaction?: Maybe<Reaction>;
  readonly createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  readonly createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  readonly createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteAbout?: Maybe<DeleteMutationResponse>;
  readonly deleteCategory?: Maybe<DeleteMutationResponse>;
  readonly deletePost?: Maybe<DeleteMutationResponse>;
  readonly deleteReaction?: Maybe<DeleteMutationResponse>;
  readonly deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  readonly deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  readonly deleteRule?: Maybe<DeleteMutationResponse>;
  readonly deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  readonly emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  readonly updateAbout?: Maybe<About>;
  readonly updateCategory?: Maybe<Category>;
  readonly updatePost?: Maybe<Post>;
  readonly updateReaction?: Maybe<Reaction>;
  readonly updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  readonly updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  readonly updateRule?: Maybe<Rule>;
  readonly updateUploadFile: UploadFile;
  /** Update an existing role */
  readonly updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePostArgs = {
  data: PostInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReactionArgs = {
  data: ReactionInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAboutArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteCategoryArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePostArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteReactionArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteRuleArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutArgs = {
  data: AboutInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReactionArgs = {
  data: ReactionInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateRuleArgs = {
  data: RuleInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type Pagination = {
  readonly __typename?: 'Pagination';
  readonly page: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly pageSize: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PaginationArg = {
  readonly limit?: InputMaybe<Scalars['Int']['input']>;
  readonly page?: InputMaybe<Scalars['Int']['input']>;
  readonly pageSize?: InputMaybe<Scalars['Int']['input']>;
  readonly start?: InputMaybe<Scalars['Int']['input']>;
};

export type Post = {
  readonly __typename?: 'Post';
  readonly categories: ReadonlyArray<Maybe<Category>>;
  readonly categories_connection?: Maybe<CategoryRelationResponseCollection>;
  readonly content: Scalars['JSON']['output'];
  readonly cover: ReadonlyArray<Maybe<UploadFile>>;
  readonly cover_connection?: Maybe<UploadFileRelationResponseCollection>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly locale?: Maybe<Scalars['String']['output']>;
  readonly localizations: ReadonlyArray<Maybe<Post>>;
  readonly localizations_connection?: Maybe<PostRelationResponseCollection>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly reactions: ReadonlyArray<Maybe<Reaction>>;
  readonly reactions_connection?: Maybe<ReactionRelationResponseCollection>;
  readonly slug: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly users_permissions_user?: Maybe<UsersPermissionsUser>;
};


export type PostCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type PostCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type PostCoverArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type PostCover_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type PostLocalizationsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type PostLocalizations_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type PostReactionsArgs = {
  filters?: InputMaybe<ReactionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type PostReactions_ConnectionArgs = {
  filters?: InputMaybe<ReactionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type PostEntityResponseCollection = {
  readonly __typename?: 'PostEntityResponseCollection';
  readonly nodes: ReadonlyArray<Post>;
  readonly pageInfo: Pagination;
};

export type PostFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<PostFiltersInput>>>;
  readonly categories?: InputMaybe<CategoryFiltersInput>;
  readonly content?: InputMaybe<JsonFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly locale?: InputMaybe<StringFilterInput>;
  readonly localizations?: InputMaybe<PostFiltersInput>;
  readonly not?: InputMaybe<PostFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<PostFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly reactions?: InputMaybe<ReactionFiltersInput>;
  readonly slug?: InputMaybe<StringFilterInput>;
  readonly title?: InputMaybe<StringFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type PostInput = {
  readonly categories?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly content?: InputMaybe<Scalars['JSON']['input']>;
  readonly cover?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly reactions?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly slug?: InputMaybe<Scalars['String']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  readonly users_permissions_user?: InputMaybe<Scalars['ID']['input']>;
};

export type PostRelationResponseCollection = {
  readonly __typename?: 'PostRelationResponseCollection';
  readonly nodes: ReadonlyArray<Post>;
};

export const enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
};

export type Query = {
  readonly __typename?: 'Query';
  readonly about?: Maybe<About>;
  readonly categories: ReadonlyArray<Maybe<Category>>;
  readonly categories_connection?: Maybe<CategoryEntityResponseCollection>;
  readonly category?: Maybe<Category>;
  readonly i18NLocale?: Maybe<I18NLocale>;
  readonly i18NLocales: ReadonlyArray<Maybe<I18NLocale>>;
  readonly i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  readonly me?: Maybe<UsersPermissionsMe>;
  readonly post?: Maybe<Post>;
  readonly posts: ReadonlyArray<Maybe<Post>>;
  readonly posts_connection?: Maybe<PostEntityResponseCollection>;
  readonly reaction?: Maybe<Reaction>;
  readonly reactions: ReadonlyArray<Maybe<Reaction>>;
  readonly reactions_connection?: Maybe<ReactionEntityResponseCollection>;
  readonly reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  readonly reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  readonly reviewWorkflowsWorkflowStages: ReadonlyArray<Maybe<ReviewWorkflowsWorkflowStage>>;
  readonly reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  readonly reviewWorkflowsWorkflows: ReadonlyArray<Maybe<ReviewWorkflowsWorkflow>>;
  readonly reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  readonly rule?: Maybe<Rule>;
  readonly uploadFile?: Maybe<UploadFile>;
  readonly uploadFiles: ReadonlyArray<Maybe<UploadFile>>;
  readonly uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  readonly usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  readonly usersPermissionsRoles: ReadonlyArray<Maybe<UsersPermissionsRole>>;
  readonly usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  readonly usersPermissionsUsers: ReadonlyArray<Maybe<UsersPermissionsUser>>;
  readonly usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAboutArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoryArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPostArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPosts_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReactionArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReactionsArgs = {
  filters?: InputMaybe<ReactionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReactions_ConnectionArgs = {
  filters?: InputMaybe<ReactionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryRuleArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type Reaction = {
  readonly __typename?: 'Reaction';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly post?: Maybe<Post>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly type: Enum_Reaction_Type;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly users_permissions_user?: Maybe<UsersPermissionsUser>;
};

export type ReactionEntityResponseCollection = {
  readonly __typename?: 'ReactionEntityResponseCollection';
  readonly nodes: ReadonlyArray<Reaction>;
  readonly pageInfo: Pagination;
};

export type ReactionFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<ReactionFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly not?: InputMaybe<ReactionFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<ReactionFiltersInput>>>;
  readonly post?: InputMaybe<PostFiltersInput>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly type?: InputMaybe<StringFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type ReactionInput = {
  readonly post?: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly type?: InputMaybe<Enum_Reaction_Type>;
  readonly users_permissions_user?: InputMaybe<Scalars['ID']['input']>;
};

export type ReactionRelationResponseCollection = {
  readonly __typename?: 'ReactionRelationResponseCollection';
  readonly nodes: ReadonlyArray<Reaction>;
};

export type ReviewWorkflowsWorkflow = {
  readonly __typename?: 'ReviewWorkflowsWorkflow';
  readonly contentTypes: Scalars['JSON']['output'];
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  readonly stages: ReadonlyArray<Maybe<ReviewWorkflowsWorkflowStage>>;
  readonly stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  readonly __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  readonly nodes: ReadonlyArray<ReviewWorkflowsWorkflow>;
  readonly pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  readonly contentTypes?: InputMaybe<JsonFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  readonly stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  readonly contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  readonly stages?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  readonly __typename?: 'ReviewWorkflowsWorkflowStage';
  readonly color?: Maybe<Scalars['String']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  readonly __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  readonly nodes: ReadonlyArray<ReviewWorkflowsWorkflowStage>;
  readonly pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  readonly color?: InputMaybe<StringFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  readonly color?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  readonly __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  readonly nodes: ReadonlyArray<ReviewWorkflowsWorkflowStage>;
};

export type Rule = {
  readonly __typename?: 'Rule';
  readonly content: Scalars['JSON']['output'];
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly locale?: Maybe<Scalars['String']['output']>;
  readonly localizations: ReadonlyArray<Maybe<Rule>>;
  readonly localizations_connection?: Maybe<RuleRelationResponseCollection>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RuleInput = {
  readonly content?: InputMaybe<Scalars['JSON']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
};

export type RuleRelationResponseCollection = {
  readonly __typename?: 'RuleRelationResponseCollection';
  readonly nodes: ReadonlyArray<Rule>;
};

export type StringFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly containsi?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly eq?: InputMaybe<Scalars['String']['input']>;
  readonly eqi?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly ne?: InputMaybe<Scalars['String']['input']>;
  readonly nei?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<StringFilterInput>;
  readonly notContains?: InputMaybe<Scalars['String']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['String']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  readonly __typename?: 'UploadFile';
  readonly alternativeText?: Maybe<Scalars['String']['output']>;
  readonly caption?: Maybe<Scalars['String']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly ext?: Maybe<Scalars['String']['output']>;
  readonly formats?: Maybe<Scalars['JSON']['output']>;
  readonly hash: Scalars['String']['output'];
  readonly height?: Maybe<Scalars['Int']['output']>;
  readonly mime: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly previewUrl?: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly provider_metadata?: Maybe<Scalars['JSON']['output']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly related?: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly url: Scalars['String']['output'];
  readonly width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  readonly __typename?: 'UploadFileEntityResponseCollection';
  readonly nodes: ReadonlyArray<UploadFile>;
  readonly pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  readonly alternativeText?: InputMaybe<StringFilterInput>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption?: InputMaybe<StringFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly ext?: InputMaybe<StringFilterInput>;
  readonly formats?: InputMaybe<JsonFilterInput>;
  readonly hash?: InputMaybe<StringFilterInput>;
  readonly height?: InputMaybe<IntFilterInput>;
  readonly mime?: InputMaybe<StringFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<UploadFileFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl?: InputMaybe<StringFilterInput>;
  readonly provider?: InputMaybe<StringFilterInput>;
  readonly provider_metadata?: InputMaybe<JsonFilterInput>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly size?: InputMaybe<FloatFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly url?: InputMaybe<StringFilterInput>;
  readonly width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  readonly __typename?: 'UploadFileRelationResponseCollection';
  readonly nodes: ReadonlyArray<UploadFile>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly __typename?: 'UsersPermissionsCreateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly __typename?: 'UsersPermissionsDeleteRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt?: Maybe<Scalars['String']['output']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: 'UsersPermissionsMe';
  readonly blocked?: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed?: Maybe<Scalars['Boolean']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly role?: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  readonly __typename?: 'UsersPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly action: Scalars['String']['output'];
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly role?: Maybe<UsersPermissionsRole>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  readonly action?: InputMaybe<StringFilterInput>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  readonly nodes: ReadonlyArray<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  readonly email: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  readonly __typename?: 'UsersPermissionsRole';
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly permissions: ReadonlyArray<Maybe<UsersPermissionsPermission>>;
  readonly permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly type?: Maybe<Scalars['String']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly users: ReadonlyArray<Maybe<UsersPermissionsUser>>;
  readonly users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  readonly nodes: ReadonlyArray<UsersPermissionsRole>;
  readonly pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly description?: InputMaybe<StringFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly type?: InputMaybe<StringFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly permissions?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly type?: InputMaybe<Scalars['String']['input']>;
  readonly users?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly __typename?: 'UsersPermissionsUpdateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  readonly __typename?: 'UsersPermissionsUser';
  readonly avatar?: Maybe<UploadFile>;
  readonly blocked?: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed?: Maybe<Scalars['Boolean']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly documentId: Scalars['ID']['output'];
  readonly email: Scalars['String']['output'];
  readonly posts: ReadonlyArray<Maybe<Post>>;
  readonly posts_connection?: Maybe<PostRelationResponseCollection>;
  readonly provider?: Maybe<Scalars['String']['output']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly reactions: ReadonlyArray<Maybe<Reaction>>;
  readonly reactions_connection?: Maybe<ReactionRelationResponseCollection>;
  readonly role?: Maybe<UsersPermissionsRole>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly username: Scalars['String']['output'];
};


export type UsersPermissionsUserPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserPosts_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserReactionsArgs = {
  filters?: InputMaybe<ReactionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserReactions_ConnectionArgs = {
  filters?: InputMaybe<ReactionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntityResponse = {
  readonly __typename?: 'UsersPermissionsUserEntityResponse';
  readonly data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserEntityResponseCollection';
  readonly nodes: ReadonlyArray<UsersPermissionsUser>;
  readonly pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked?: InputMaybe<BooleanFilterInput>;
  readonly confirmed?: InputMaybe<BooleanFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly documentId?: InputMaybe<IdFilterInput>;
  readonly email?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly posts?: InputMaybe<PostFiltersInput>;
  readonly provider?: InputMaybe<StringFilterInput>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly reactions?: InputMaybe<ReactionFiltersInput>;
  readonly role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  readonly avatar?: InputMaybe<Scalars['ID']['input']>;
  readonly blocked?: InputMaybe<Scalars['Boolean']['input']>;
  readonly confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
  readonly posts?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly provider?: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly reactions?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly role?: InputMaybe<Scalars['ID']['input']>;
  readonly username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserRelationResponseCollection';
  readonly nodes: ReadonlyArray<UsersPermissionsUser>;
};

export type GetAboutQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetAboutQuery = { readonly __typename?: 'Query', readonly about?: { readonly __typename?: 'About', readonly title: string, readonly content: any } | null };

export type GetRulesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetRulesQuery = { readonly __typename?: 'Query', readonly rule?: { readonly __typename?: 'Rule', readonly title: string, readonly content: any } | null };

export type GetPostQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  slug: Scalars['String']['input'];
}>;


export type GetPostQuery = { readonly __typename?: 'Query', readonly posts: ReadonlyArray<{ readonly __typename?: 'Post', readonly title: string, readonly slug: string, readonly content: any, readonly createdAt?: any | null, readonly cover: ReadonlyArray<{ readonly __typename?: 'UploadFile', readonly url: string } | null>, readonly users_permissions_user?: { readonly __typename?: 'UsersPermissionsUser', readonly username: string, readonly email: string, readonly avatar?: { readonly __typename?: 'UploadFile', readonly url: string } | null } | null, readonly categories: ReadonlyArray<{ readonly __typename?: 'Category', readonly name: string } | null> } | null> };

export type GetPostsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GetPostsQuery = { readonly __typename?: 'Query', readonly posts: ReadonlyArray<{ readonly __typename?: 'Post', readonly documentId: string, readonly slug: string, readonly title: string, readonly content: any, readonly createdAt?: any | null, readonly cover: ReadonlyArray<{ readonly __typename?: 'UploadFile', readonly url: string } | null>, readonly users_permissions_user?: { readonly __typename?: 'UsersPermissionsUser', readonly username: string, readonly email: string, readonly avatar?: { readonly __typename?: 'UploadFile', readonly url: string } | null } | null, readonly categories: ReadonlyArray<{ readonly __typename?: 'Category', readonly name: string } | null> } | null> };
