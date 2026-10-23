
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SharedPosts
 * 
 */
export type SharedPosts = $Result.DefaultSelection<Prisma.$SharedPostsPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostSample
 * 
 */
export type PostSample = $Result.DefaultSelection<Prisma.$PostSamplePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharedPosts`: Exposes CRUD operations for the **SharedPosts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedPosts
    * const sharedPosts = await prisma.sharedPosts.findMany()
    * ```
    */
  get sharedPosts(): Prisma.SharedPostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postSample`: Exposes CRUD operations for the **PostSample** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostSamples
    * const postSamples = await prisma.postSample.findMany()
    * ```
    */
  get postSample(): Prisma.PostSampleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SharedPosts: 'SharedPosts',
    Post: 'Post',
    PostSample: 'PostSample',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "sharedPosts" | "post" | "postSample" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SharedPosts: {
        payload: Prisma.$SharedPostsPayload<ExtArgs>
        fields: Prisma.SharedPostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharedPostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharedPostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostsPayload>
          }
          findFirst: {
            args: Prisma.SharedPostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharedPostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostsPayload>
          }
          findMany: {
            args: Prisma.SharedPostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostsPayload>[]
          }
          create: {
            args: Prisma.SharedPostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostsPayload>
          }
          createMany: {
            args: Prisma.SharedPostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SharedPostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostsPayload>
          }
          update: {
            args: Prisma.SharedPostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostsPayload>
          }
          deleteMany: {
            args: Prisma.SharedPostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SharedPostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SharedPostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPostsPayload>
          }
          aggregate: {
            args: Prisma.SharedPostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSharedPosts>
          }
          groupBy: {
            args: Prisma.SharedPostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharedPostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SharedPostsCountArgs<ExtArgs>
            result: $Utils.Optional<SharedPostsCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostSample: {
        payload: Prisma.$PostSamplePayload<ExtArgs>
        fields: Prisma.PostSampleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostSampleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostSamplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostSampleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostSamplePayload>
          }
          findFirst: {
            args: Prisma.PostSampleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostSamplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostSampleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostSamplePayload>
          }
          findMany: {
            args: Prisma.PostSampleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostSamplePayload>[]
          }
          create: {
            args: Prisma.PostSampleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostSamplePayload>
          }
          createMany: {
            args: Prisma.PostSampleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostSampleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostSamplePayload>
          }
          update: {
            args: Prisma.PostSampleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostSamplePayload>
          }
          deleteMany: {
            args: Prisma.PostSampleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostSampleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostSampleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostSamplePayload>
          }
          aggregate: {
            args: Prisma.PostSampleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostSample>
          }
          groupBy: {
            args: Prisma.PostSampleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostSampleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostSampleCountArgs<ExtArgs>
            result: $Utils.Optional<PostSampleCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    sharedPosts?: SharedPostsOmit
    post?: PostOmit
    postSample?: PostSampleOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Payment: number
    posts: number
    CV: number
    SharedPosts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | UserCountOutputTypeCountPaymentArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    CV?: boolean | UserCountOutputTypeCountCVArgs
    SharedPosts?: boolean | UserCountOutputTypeCountSharedPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCVArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostSampleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedPostsWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    SharedPosts: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SharedPosts?: boolean | PostCountOutputTypeCountSharedPostsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountSharedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedPostsWhereInput
  }


  /**
   * Count Type PostSampleCountOutputType
   */

  export type PostSampleCountOutputType = {
    used: number
  }

  export type PostSampleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    used?: boolean | PostSampleCountOutputTypeCountUsedArgs
  }

  // Custom InputTypes
  /**
   * PostSampleCountOutputType without action
   */
  export type PostSampleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostSampleCountOutputType
     */
    select?: PostSampleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostSampleCountOutputType without action
   */
  export type PostSampleCountOutputTypeCountUsedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    sex: number | null
    role: number | null
    accountType: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    sex: number | null
    role: number | null
    accountType: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    descript: string | null
    sex: number | null
    address: string | null
    job: string | null
    birthdate: Date | null
    portfolio: string | null
    twitter: string | null
    reddit: string | null
    github: string | null
    facebook: string | null
    mail: string | null
    phone: string | null
    linked: string | null
    ava: string | null
    pass: string | null
    role: number | null
    date01: Date | null
    date02: Date | null
    accountType: number | null
    emailVerified: boolean | null
    verifyToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    descript: string | null
    sex: number | null
    address: string | null
    job: string | null
    birthdate: Date | null
    portfolio: string | null
    twitter: string | null
    reddit: string | null
    github: string | null
    facebook: string | null
    mail: string | null
    phone: string | null
    linked: string | null
    ava: string | null
    pass: string | null
    role: number | null
    date01: Date | null
    date02: Date | null
    accountType: number | null
    emailVerified: boolean | null
    verifyToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    descript: number
    sex: number
    address: number
    job: number
    birthdate: number
    portfolio: number
    twitter: number
    reddit: number
    github: number
    facebook: number
    mail: number
    phone: number
    linked: number
    ava: number
    pass: number
    role: number
    date01: number
    date02: number
    accountType: number
    emailVerified: number
    verifyToken: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    sex?: true
    role?: true
    accountType?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    sex?: true
    role?: true
    accountType?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    descript?: true
    sex?: true
    address?: true
    job?: true
    birthdate?: true
    portfolio?: true
    twitter?: true
    reddit?: true
    github?: true
    facebook?: true
    mail?: true
    phone?: true
    linked?: true
    ava?: true
    pass?: true
    role?: true
    date01?: true
    date02?: true
    accountType?: true
    emailVerified?: true
    verifyToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    descript?: true
    sex?: true
    address?: true
    job?: true
    birthdate?: true
    portfolio?: true
    twitter?: true
    reddit?: true
    github?: true
    facebook?: true
    mail?: true
    phone?: true
    linked?: true
    ava?: true
    pass?: true
    role?: true
    date01?: true
    date02?: true
    accountType?: true
    emailVerified?: true
    verifyToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    descript?: true
    sex?: true
    address?: true
    job?: true
    birthdate?: true
    portfolio?: true
    twitter?: true
    reddit?: true
    github?: true
    facebook?: true
    mail?: true
    phone?: true
    linked?: true
    ava?: true
    pass?: true
    role?: true
    date01?: true
    date02?: true
    accountType?: true
    emailVerified?: true
    verifyToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    descript: string | null
    sex: number
    address: string | null
    job: string | null
    birthdate: Date | null
    portfolio: string | null
    twitter: string | null
    reddit: string | null
    github: string | null
    facebook: string | null
    mail: string | null
    phone: string | null
    linked: string | null
    ava: string | null
    pass: string | null
    role: number
    date01: Date | null
    date02: Date | null
    accountType: number | null
    emailVerified: boolean
    verifyToken: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    descript?: boolean
    sex?: boolean
    address?: boolean
    job?: boolean
    birthdate?: boolean
    portfolio?: boolean
    twitter?: boolean
    reddit?: boolean
    github?: boolean
    facebook?: boolean
    mail?: boolean
    phone?: boolean
    linked?: boolean
    ava?: boolean
    pass?: boolean
    role?: boolean
    date01?: boolean
    date02?: boolean
    accountType?: boolean
    emailVerified?: boolean
    verifyToken?: boolean
    Payment?: boolean | User$PaymentArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    CV?: boolean | User$CVArgs<ExtArgs>
    SharedPosts?: boolean | User$SharedPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    descript?: boolean
    sex?: boolean
    address?: boolean
    job?: boolean
    birthdate?: boolean
    portfolio?: boolean
    twitter?: boolean
    reddit?: boolean
    github?: boolean
    facebook?: boolean
    mail?: boolean
    phone?: boolean
    linked?: boolean
    ava?: boolean
    pass?: boolean
    role?: boolean
    date01?: boolean
    date02?: boolean
    accountType?: boolean
    emailVerified?: boolean
    verifyToken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "descript" | "sex" | "address" | "job" | "birthdate" | "portfolio" | "twitter" | "reddit" | "github" | "facebook" | "mail" | "phone" | "linked" | "ava" | "pass" | "role" | "date01" | "date02" | "accountType" | "emailVerified" | "verifyToken", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | User$PaymentArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    CV?: boolean | User$CVArgs<ExtArgs>
    SharedPosts?: boolean | User$SharedPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      CV: Prisma.$PostSamplePayload<ExtArgs>[]
      SharedPosts: Prisma.$SharedPostsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      descript: string | null
      sex: number
      address: string | null
      job: string | null
      birthdate: Date | null
      portfolio: string | null
      twitter: string | null
      reddit: string | null
      github: string | null
      facebook: string | null
      mail: string | null
      phone: string | null
      linked: string | null
      ava: string | null
      pass: string | null
      role: number
      date01: Date | null
      date02: Date | null
      accountType: number | null
      emailVerified: boolean
      verifyToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Payment<T extends User$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, User$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CV<T extends User$CVArgs<ExtArgs> = {}>(args?: Subset<T, User$CVArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostSamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SharedPosts<T extends User$SharedPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$SharedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedPostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly descript: FieldRef<"User", 'String'>
    readonly sex: FieldRef<"User", 'Int'>
    readonly address: FieldRef<"User", 'String'>
    readonly job: FieldRef<"User", 'String'>
    readonly birthdate: FieldRef<"User", 'DateTime'>
    readonly portfolio: FieldRef<"User", 'String'>
    readonly twitter: FieldRef<"User", 'String'>
    readonly reddit: FieldRef<"User", 'String'>
    readonly github: FieldRef<"User", 'String'>
    readonly facebook: FieldRef<"User", 'String'>
    readonly mail: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly linked: FieldRef<"User", 'String'>
    readonly ava: FieldRef<"User", 'String'>
    readonly pass: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Int'>
    readonly date01: FieldRef<"User", 'DateTime'>
    readonly date02: FieldRef<"User", 'DateTime'>
    readonly accountType: FieldRef<"User", 'Int'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly verifyToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Payment
   */
  export type User$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.CV
   */
  export type User$CVArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostSample
     */
    select?: PostSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostSample
     */
    omit?: PostSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostSampleInclude<ExtArgs> | null
    where?: PostSampleWhereInput
    orderBy?: PostSampleOrderByWithRelationInput | PostSampleOrderByWithRelationInput[]
    cursor?: PostSampleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostSampleScalarFieldEnum | PostSampleScalarFieldEnum[]
  }

  /**
   * User.SharedPosts
   */
  export type User$SharedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPosts
     */
    select?: SharedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPosts
     */
    omit?: SharedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostsInclude<ExtArgs> | null
    where?: SharedPostsWhereInput
    orderBy?: SharedPostsOrderByWithRelationInput | SharedPostsOrderByWithRelationInput[]
    cursor?: SharedPostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedPostsScalarFieldEnum | SharedPostsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SharedPosts
   */

  export type AggregateSharedPosts = {
    _count: SharedPostsCountAggregateOutputType | null
    _avg: SharedPostsAvgAggregateOutputType | null
    _sum: SharedPostsSumAggregateOutputType | null
    _min: SharedPostsMinAggregateOutputType | null
    _max: SharedPostsMaxAggregateOutputType | null
  }

  export type SharedPostsAvgAggregateOutputType = {
    userId: number | null
    postId: number | null
  }

  export type SharedPostsSumAggregateOutputType = {
    userId: number | null
    postId: number | null
  }

  export type SharedPostsMinAggregateOutputType = {
    userId: number | null
    postId: number | null
  }

  export type SharedPostsMaxAggregateOutputType = {
    userId: number | null
    postId: number | null
  }

  export type SharedPostsCountAggregateOutputType = {
    userId: number
    postId: number
    _all: number
  }


  export type SharedPostsAvgAggregateInputType = {
    userId?: true
    postId?: true
  }

  export type SharedPostsSumAggregateInputType = {
    userId?: true
    postId?: true
  }

  export type SharedPostsMinAggregateInputType = {
    userId?: true
    postId?: true
  }

  export type SharedPostsMaxAggregateInputType = {
    userId?: true
    postId?: true
  }

  export type SharedPostsCountAggregateInputType = {
    userId?: true
    postId?: true
    _all?: true
  }

  export type SharedPostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedPosts to aggregate.
     */
    where?: SharedPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedPosts to fetch.
     */
    orderBy?: SharedPostsOrderByWithRelationInput | SharedPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharedPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharedPosts
    **/
    _count?: true | SharedPostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SharedPostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SharedPostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedPostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedPostsMaxAggregateInputType
  }

  export type GetSharedPostsAggregateType<T extends SharedPostsAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedPosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedPosts[P]>
      : GetScalarType<T[P], AggregateSharedPosts[P]>
  }




  export type SharedPostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedPostsWhereInput
    orderBy?: SharedPostsOrderByWithAggregationInput | SharedPostsOrderByWithAggregationInput[]
    by: SharedPostsScalarFieldEnum[] | SharedPostsScalarFieldEnum
    having?: SharedPostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedPostsCountAggregateInputType | true
    _avg?: SharedPostsAvgAggregateInputType
    _sum?: SharedPostsSumAggregateInputType
    _min?: SharedPostsMinAggregateInputType
    _max?: SharedPostsMaxAggregateInputType
  }

  export type SharedPostsGroupByOutputType = {
    userId: number
    postId: number
    _count: SharedPostsCountAggregateOutputType | null
    _avg: SharedPostsAvgAggregateOutputType | null
    _sum: SharedPostsSumAggregateOutputType | null
    _min: SharedPostsMinAggregateOutputType | null
    _max: SharedPostsMaxAggregateOutputType | null
  }

  type GetSharedPostsGroupByPayload<T extends SharedPostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharedPostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedPostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedPostsGroupByOutputType[P]>
            : GetScalarType<T[P], SharedPostsGroupByOutputType[P]>
        }
      >
    >


  export type SharedPostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedPosts"]>



  export type SharedPostsSelectScalar = {
    userId?: boolean
    postId?: boolean
  }

  export type SharedPostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "postId", ExtArgs["result"]["sharedPosts"]>
  export type SharedPostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SharedPostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SharedPosts"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      postId: number
    }, ExtArgs["result"]["sharedPosts"]>
    composites: {}
  }

  type SharedPostsGetPayload<S extends boolean | null | undefined | SharedPostsDefaultArgs> = $Result.GetResult<Prisma.$SharedPostsPayload, S>

  type SharedPostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SharedPostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharedPostsCountAggregateInputType | true
    }

  export interface SharedPostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SharedPosts'], meta: { name: 'SharedPosts' } }
    /**
     * Find zero or one SharedPosts that matches the filter.
     * @param {SharedPostsFindUniqueArgs} args - Arguments to find a SharedPosts
     * @example
     * // Get one SharedPosts
     * const sharedPosts = await prisma.sharedPosts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharedPostsFindUniqueArgs>(args: SelectSubset<T, SharedPostsFindUniqueArgs<ExtArgs>>): Prisma__SharedPostsClient<$Result.GetResult<Prisma.$SharedPostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SharedPosts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharedPostsFindUniqueOrThrowArgs} args - Arguments to find a SharedPosts
     * @example
     * // Get one SharedPosts
     * const sharedPosts = await prisma.sharedPosts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharedPostsFindUniqueOrThrowArgs>(args: SelectSubset<T, SharedPostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SharedPostsClient<$Result.GetResult<Prisma.$SharedPostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostsFindFirstArgs} args - Arguments to find a SharedPosts
     * @example
     * // Get one SharedPosts
     * const sharedPosts = await prisma.sharedPosts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharedPostsFindFirstArgs>(args?: SelectSubset<T, SharedPostsFindFirstArgs<ExtArgs>>): Prisma__SharedPostsClient<$Result.GetResult<Prisma.$SharedPostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedPosts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostsFindFirstOrThrowArgs} args - Arguments to find a SharedPosts
     * @example
     * // Get one SharedPosts
     * const sharedPosts = await prisma.sharedPosts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharedPostsFindFirstOrThrowArgs>(args?: SelectSubset<T, SharedPostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SharedPostsClient<$Result.GetResult<Prisma.$SharedPostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SharedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedPosts
     * const sharedPosts = await prisma.sharedPosts.findMany()
     * 
     * // Get first 10 SharedPosts
     * const sharedPosts = await prisma.sharedPosts.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const sharedPostsWithUserIdOnly = await prisma.sharedPosts.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends SharedPostsFindManyArgs>(args?: SelectSubset<T, SharedPostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedPostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SharedPosts.
     * @param {SharedPostsCreateArgs} args - Arguments to create a SharedPosts.
     * @example
     * // Create one SharedPosts
     * const SharedPosts = await prisma.sharedPosts.create({
     *   data: {
     *     // ... data to create a SharedPosts
     *   }
     * })
     * 
     */
    create<T extends SharedPostsCreateArgs>(args: SelectSubset<T, SharedPostsCreateArgs<ExtArgs>>): Prisma__SharedPostsClient<$Result.GetResult<Prisma.$SharedPostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SharedPosts.
     * @param {SharedPostsCreateManyArgs} args - Arguments to create many SharedPosts.
     * @example
     * // Create many SharedPosts
     * const sharedPosts = await prisma.sharedPosts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SharedPostsCreateManyArgs>(args?: SelectSubset<T, SharedPostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SharedPosts.
     * @param {SharedPostsDeleteArgs} args - Arguments to delete one SharedPosts.
     * @example
     * // Delete one SharedPosts
     * const SharedPosts = await prisma.sharedPosts.delete({
     *   where: {
     *     // ... filter to delete one SharedPosts
     *   }
     * })
     * 
     */
    delete<T extends SharedPostsDeleteArgs>(args: SelectSubset<T, SharedPostsDeleteArgs<ExtArgs>>): Prisma__SharedPostsClient<$Result.GetResult<Prisma.$SharedPostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SharedPosts.
     * @param {SharedPostsUpdateArgs} args - Arguments to update one SharedPosts.
     * @example
     * // Update one SharedPosts
     * const sharedPosts = await prisma.sharedPosts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SharedPostsUpdateArgs>(args: SelectSubset<T, SharedPostsUpdateArgs<ExtArgs>>): Prisma__SharedPostsClient<$Result.GetResult<Prisma.$SharedPostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SharedPosts.
     * @param {SharedPostsDeleteManyArgs} args - Arguments to filter SharedPosts to delete.
     * @example
     * // Delete a few SharedPosts
     * const { count } = await prisma.sharedPosts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SharedPostsDeleteManyArgs>(args?: SelectSubset<T, SharedPostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedPosts
     * const sharedPosts = await prisma.sharedPosts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SharedPostsUpdateManyArgs>(args: SelectSubset<T, SharedPostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SharedPosts.
     * @param {SharedPostsUpsertArgs} args - Arguments to update or create a SharedPosts.
     * @example
     * // Update or create a SharedPosts
     * const sharedPosts = await prisma.sharedPosts.upsert({
     *   create: {
     *     // ... data to create a SharedPosts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedPosts we want to update
     *   }
     * })
     */
    upsert<T extends SharedPostsUpsertArgs>(args: SelectSubset<T, SharedPostsUpsertArgs<ExtArgs>>): Prisma__SharedPostsClient<$Result.GetResult<Prisma.$SharedPostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SharedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostsCountArgs} args - Arguments to filter SharedPosts to count.
     * @example
     * // Count the number of SharedPosts
     * const count = await prisma.sharedPosts.count({
     *   where: {
     *     // ... the filter for the SharedPosts we want to count
     *   }
     * })
    **/
    count<T extends SharedPostsCountArgs>(
      args?: Subset<T, SharedPostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedPostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SharedPostsAggregateArgs>(args: Subset<T, SharedPostsAggregateArgs>): Prisma.PrismaPromise<GetSharedPostsAggregateType<T>>

    /**
     * Group by SharedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPostsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SharedPostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedPostsGroupByArgs['orderBy'] }
        : { orderBy?: SharedPostsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SharedPostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SharedPosts model
   */
  readonly fields: SharedPostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedPosts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharedPostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SharedPosts model
   */
  interface SharedPostsFieldRefs {
    readonly userId: FieldRef<"SharedPosts", 'Int'>
    readonly postId: FieldRef<"SharedPosts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SharedPosts findUnique
   */
  export type SharedPostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPosts
     */
    select?: SharedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPosts
     */
    omit?: SharedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostsInclude<ExtArgs> | null
    /**
     * Filter, which SharedPosts to fetch.
     */
    where: SharedPostsWhereUniqueInput
  }

  /**
   * SharedPosts findUniqueOrThrow
   */
  export type SharedPostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPosts
     */
    select?: SharedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPosts
     */
    omit?: SharedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostsInclude<ExtArgs> | null
    /**
     * Filter, which SharedPosts to fetch.
     */
    where: SharedPostsWhereUniqueInput
  }

  /**
   * SharedPosts findFirst
   */
  export type SharedPostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPosts
     */
    select?: SharedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPosts
     */
    omit?: SharedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostsInclude<ExtArgs> | null
    /**
     * Filter, which SharedPosts to fetch.
     */
    where?: SharedPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedPosts to fetch.
     */
    orderBy?: SharedPostsOrderByWithRelationInput | SharedPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedPosts.
     */
    cursor?: SharedPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedPosts.
     */
    distinct?: SharedPostsScalarFieldEnum | SharedPostsScalarFieldEnum[]
  }

  /**
   * SharedPosts findFirstOrThrow
   */
  export type SharedPostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPosts
     */
    select?: SharedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPosts
     */
    omit?: SharedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostsInclude<ExtArgs> | null
    /**
     * Filter, which SharedPosts to fetch.
     */
    where?: SharedPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedPosts to fetch.
     */
    orderBy?: SharedPostsOrderByWithRelationInput | SharedPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedPosts.
     */
    cursor?: SharedPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedPosts.
     */
    distinct?: SharedPostsScalarFieldEnum | SharedPostsScalarFieldEnum[]
  }

  /**
   * SharedPosts findMany
   */
  export type SharedPostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPosts
     */
    select?: SharedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPosts
     */
    omit?: SharedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostsInclude<ExtArgs> | null
    /**
     * Filter, which SharedPosts to fetch.
     */
    where?: SharedPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedPosts to fetch.
     */
    orderBy?: SharedPostsOrderByWithRelationInput | SharedPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharedPosts.
     */
    cursor?: SharedPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedPosts.
     */
    distinct?: SharedPostsScalarFieldEnum | SharedPostsScalarFieldEnum[]
  }

  /**
   * SharedPosts create
   */
  export type SharedPostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPosts
     */
    select?: SharedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPosts
     */
    omit?: SharedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostsInclude<ExtArgs> | null
    /**
     * The data needed to create a SharedPosts.
     */
    data: XOR<SharedPostsCreateInput, SharedPostsUncheckedCreateInput>
  }

  /**
   * SharedPosts createMany
   */
  export type SharedPostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SharedPosts.
     */
    data: SharedPostsCreateManyInput | SharedPostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SharedPosts update
   */
  export type SharedPostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPosts
     */
    select?: SharedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPosts
     */
    omit?: SharedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostsInclude<ExtArgs> | null
    /**
     * The data needed to update a SharedPosts.
     */
    data: XOR<SharedPostsUpdateInput, SharedPostsUncheckedUpdateInput>
    /**
     * Choose, which SharedPosts to update.
     */
    where: SharedPostsWhereUniqueInput
  }

  /**
   * SharedPosts updateMany
   */
  export type SharedPostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SharedPosts.
     */
    data: XOR<SharedPostsUpdateManyMutationInput, SharedPostsUncheckedUpdateManyInput>
    /**
     * Filter which SharedPosts to update
     */
    where?: SharedPostsWhereInput
    /**
     * Limit how many SharedPosts to update.
     */
    limit?: number
  }

  /**
   * SharedPosts upsert
   */
  export type SharedPostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPosts
     */
    select?: SharedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPosts
     */
    omit?: SharedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostsInclude<ExtArgs> | null
    /**
     * The filter to search for the SharedPosts to update in case it exists.
     */
    where: SharedPostsWhereUniqueInput
    /**
     * In case the SharedPosts found by the `where` argument doesn't exist, create a new SharedPosts with this data.
     */
    create: XOR<SharedPostsCreateInput, SharedPostsUncheckedCreateInput>
    /**
     * In case the SharedPosts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharedPostsUpdateInput, SharedPostsUncheckedUpdateInput>
  }

  /**
   * SharedPosts delete
   */
  export type SharedPostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPosts
     */
    select?: SharedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPosts
     */
    omit?: SharedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostsInclude<ExtArgs> | null
    /**
     * Filter which SharedPosts to delete.
     */
    where: SharedPostsWhereUniqueInput
  }

  /**
   * SharedPosts deleteMany
   */
  export type SharedPostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedPosts to delete
     */
    where?: SharedPostsWhereInput
    /**
     * Limit how many SharedPosts to delete.
     */
    limit?: number
  }

  /**
   * SharedPosts without action
   */
  export type SharedPostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPosts
     */
    select?: SharedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPosts
     */
    omit?: SharedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostsInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    iduser: number | null
    stat01: number | null
    stat02: number | null
    idSample: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    iduser: number | null
    stat01: number | null
    stat02: number | null
    idSample: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    iduser: number | null
    img: string | null
    content: string | null
    stat01: number | null
    stat02: number | null
    lang: string | null
    date01: Date | null
    date02: Date | null
    idSample: number | null
    typ01: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    iduser: number | null
    img: string | null
    content: string | null
    stat01: number | null
    stat02: number | null
    lang: string | null
    date01: Date | null
    date02: Date | null
    idSample: number | null
    typ01: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    iduser: number
    img: number
    content: number
    stat01: number
    stat02: number
    lang: number
    date01: number
    date02: number
    idSample: number
    typ01: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    iduser?: true
    stat01?: true
    stat02?: true
    idSample?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    iduser?: true
    stat01?: true
    stat02?: true
    idSample?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    iduser?: true
    img?: true
    content?: true
    stat01?: true
    stat02?: true
    lang?: true
    date01?: true
    date02?: true
    idSample?: true
    typ01?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    iduser?: true
    img?: true
    content?: true
    stat01?: true
    stat02?: true
    lang?: true
    date01?: true
    date02?: true
    idSample?: true
    typ01?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    iduser?: true
    img?: true
    content?: true
    stat01?: true
    stat02?: true
    lang?: true
    date01?: true
    date02?: true
    idSample?: true
    typ01?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    iduser: number | null
    img: string | null
    content: string | null
    stat01: number | null
    stat02: number | null
    lang: string
    date01: Date | null
    date02: Date | null
    idSample: number
    typ01: string | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iduser?: boolean
    img?: boolean
    content?: boolean
    stat01?: boolean
    stat02?: boolean
    lang?: boolean
    date01?: boolean
    date02?: boolean
    idSample?: boolean
    typ01?: boolean
    PostSample?: boolean | PostSampleDefaultArgs<ExtArgs>
    user?: boolean | Post$userArgs<ExtArgs>
    SharedPosts?: boolean | Post$SharedPostsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    iduser?: boolean
    img?: boolean
    content?: boolean
    stat01?: boolean
    stat02?: boolean
    lang?: boolean
    date01?: boolean
    date02?: boolean
    idSample?: boolean
    typ01?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "iduser" | "img" | "content" | "stat01" | "stat02" | "lang" | "date01" | "date02" | "idSample" | "typ01", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PostSample?: boolean | PostSampleDefaultArgs<ExtArgs>
    user?: boolean | Post$userArgs<ExtArgs>
    SharedPosts?: boolean | Post$SharedPostsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      PostSample: Prisma.$PostSamplePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      SharedPosts: Prisma.$SharedPostsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      iduser: number | null
      img: string | null
      content: string | null
      stat01: number | null
      stat02: number | null
      lang: string
      date01: Date | null
      date02: Date | null
      idSample: number
      typ01: string | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PostSample<T extends PostSampleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostSampleDefaultArgs<ExtArgs>>): Prisma__PostSampleClient<$Result.GetResult<Prisma.$PostSamplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Post$userArgs<ExtArgs> = {}>(args?: Subset<T, Post$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    SharedPosts<T extends Post$SharedPostsArgs<ExtArgs> = {}>(args?: Subset<T, Post$SharedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedPostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly iduser: FieldRef<"Post", 'Int'>
    readonly img: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly stat01: FieldRef<"Post", 'Int'>
    readonly stat02: FieldRef<"Post", 'Int'>
    readonly lang: FieldRef<"Post", 'String'>
    readonly date01: FieldRef<"Post", 'DateTime'>
    readonly date02: FieldRef<"Post", 'DateTime'>
    readonly idSample: FieldRef<"Post", 'Int'>
    readonly typ01: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.user
   */
  export type Post$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Post.SharedPosts
   */
  export type Post$SharedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPosts
     */
    select?: SharedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPosts
     */
    omit?: SharedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPostsInclude<ExtArgs> | null
    where?: SharedPostsWhereInput
    orderBy?: SharedPostsOrderByWithRelationInput | SharedPostsOrderByWithRelationInput[]
    cursor?: SharedPostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedPostsScalarFieldEnum | SharedPostsScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostSample
   */

  export type AggregatePostSample = {
    _count: PostSampleCountAggregateOutputType | null
    _avg: PostSampleAvgAggregateOutputType | null
    _sum: PostSampleSumAggregateOutputType | null
    _min: PostSampleMinAggregateOutputType | null
    _max: PostSampleMaxAggregateOutputType | null
  }

  export type PostSampleAvgAggregateOutputType = {
    id: number | null
    iduser: number | null
  }

  export type PostSampleSumAggregateOutputType = {
    id: number | null
    iduser: number | null
  }

  export type PostSampleMinAggregateOutputType = {
    id: number | null
    iduser: number | null
    img: string | null
    name: string | null
    descript: string | null
    date01: Date | null
    date02: Date | null
  }

  export type PostSampleMaxAggregateOutputType = {
    id: number | null
    iduser: number | null
    img: string | null
    name: string | null
    descript: string | null
    date01: Date | null
    date02: Date | null
  }

  export type PostSampleCountAggregateOutputType = {
    id: number
    iduser: number
    img: number
    name: number
    descript: number
    typ01: number
    typ02: number
    typ03: number
    date01: number
    date02: number
    _all: number
  }


  export type PostSampleAvgAggregateInputType = {
    id?: true
    iduser?: true
  }

  export type PostSampleSumAggregateInputType = {
    id?: true
    iduser?: true
  }

  export type PostSampleMinAggregateInputType = {
    id?: true
    iduser?: true
    img?: true
    name?: true
    descript?: true
    date01?: true
    date02?: true
  }

  export type PostSampleMaxAggregateInputType = {
    id?: true
    iduser?: true
    img?: true
    name?: true
    descript?: true
    date01?: true
    date02?: true
  }

  export type PostSampleCountAggregateInputType = {
    id?: true
    iduser?: true
    img?: true
    name?: true
    descript?: true
    typ01?: true
    typ02?: true
    typ03?: true
    date01?: true
    date02?: true
    _all?: true
  }

  export type PostSampleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostSample to aggregate.
     */
    where?: PostSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostSamples to fetch.
     */
    orderBy?: PostSampleOrderByWithRelationInput | PostSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostSamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostSamples
    **/
    _count?: true | PostSampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostSampleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSampleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostSampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostSampleMaxAggregateInputType
  }

  export type GetPostSampleAggregateType<T extends PostSampleAggregateArgs> = {
        [P in keyof T & keyof AggregatePostSample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostSample[P]>
      : GetScalarType<T[P], AggregatePostSample[P]>
  }




  export type PostSampleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostSampleWhereInput
    orderBy?: PostSampleOrderByWithAggregationInput | PostSampleOrderByWithAggregationInput[]
    by: PostSampleScalarFieldEnum[] | PostSampleScalarFieldEnum
    having?: PostSampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostSampleCountAggregateInputType | true
    _avg?: PostSampleAvgAggregateInputType
    _sum?: PostSampleSumAggregateInputType
    _min?: PostSampleMinAggregateInputType
    _max?: PostSampleMaxAggregateInputType
  }

  export type PostSampleGroupByOutputType = {
    id: number
    iduser: number | null
    img: string | null
    name: string
    descript: string | null
    typ01: JsonValue | null
    typ02: JsonValue | null
    typ03: JsonValue | null
    date01: Date | null
    date02: Date | null
    _count: PostSampleCountAggregateOutputType | null
    _avg: PostSampleAvgAggregateOutputType | null
    _sum: PostSampleSumAggregateOutputType | null
    _min: PostSampleMinAggregateOutputType | null
    _max: PostSampleMaxAggregateOutputType | null
  }

  type GetPostSampleGroupByPayload<T extends PostSampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostSampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostSampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostSampleGroupByOutputType[P]>
            : GetScalarType<T[P], PostSampleGroupByOutputType[P]>
        }
      >
    >


  export type PostSampleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iduser?: boolean
    img?: boolean
    name?: boolean
    descript?: boolean
    typ01?: boolean
    typ02?: boolean
    typ03?: boolean
    date01?: boolean
    date02?: boolean
    used?: boolean | PostSample$usedArgs<ExtArgs>
    user?: boolean | PostSample$userArgs<ExtArgs>
    _count?: boolean | PostSampleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postSample"]>



  export type PostSampleSelectScalar = {
    id?: boolean
    iduser?: boolean
    img?: boolean
    name?: boolean
    descript?: boolean
    typ01?: boolean
    typ02?: boolean
    typ03?: boolean
    date01?: boolean
    date02?: boolean
  }

  export type PostSampleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "iduser" | "img" | "name" | "descript" | "typ01" | "typ02" | "typ03" | "date01" | "date02", ExtArgs["result"]["postSample"]>
  export type PostSampleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    used?: boolean | PostSample$usedArgs<ExtArgs>
    user?: boolean | PostSample$userArgs<ExtArgs>
    _count?: boolean | PostSampleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostSamplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostSample"
    objects: {
      used: Prisma.$PostPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      iduser: number | null
      img: string | null
      name: string
      descript: string | null
      typ01: Prisma.JsonValue | null
      typ02: Prisma.JsonValue | null
      typ03: Prisma.JsonValue | null
      date01: Date | null
      date02: Date | null
    }, ExtArgs["result"]["postSample"]>
    composites: {}
  }

  type PostSampleGetPayload<S extends boolean | null | undefined | PostSampleDefaultArgs> = $Result.GetResult<Prisma.$PostSamplePayload, S>

  type PostSampleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostSampleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostSampleCountAggregateInputType | true
    }

  export interface PostSampleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostSample'], meta: { name: 'PostSample' } }
    /**
     * Find zero or one PostSample that matches the filter.
     * @param {PostSampleFindUniqueArgs} args - Arguments to find a PostSample
     * @example
     * // Get one PostSample
     * const postSample = await prisma.postSample.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostSampleFindUniqueArgs>(args: SelectSubset<T, PostSampleFindUniqueArgs<ExtArgs>>): Prisma__PostSampleClient<$Result.GetResult<Prisma.$PostSamplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostSample that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostSampleFindUniqueOrThrowArgs} args - Arguments to find a PostSample
     * @example
     * // Get one PostSample
     * const postSample = await prisma.postSample.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostSampleFindUniqueOrThrowArgs>(args: SelectSubset<T, PostSampleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostSampleClient<$Result.GetResult<Prisma.$PostSamplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostSample that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostSampleFindFirstArgs} args - Arguments to find a PostSample
     * @example
     * // Get one PostSample
     * const postSample = await prisma.postSample.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostSampleFindFirstArgs>(args?: SelectSubset<T, PostSampleFindFirstArgs<ExtArgs>>): Prisma__PostSampleClient<$Result.GetResult<Prisma.$PostSamplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostSample that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostSampleFindFirstOrThrowArgs} args - Arguments to find a PostSample
     * @example
     * // Get one PostSample
     * const postSample = await prisma.postSample.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostSampleFindFirstOrThrowArgs>(args?: SelectSubset<T, PostSampleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostSampleClient<$Result.GetResult<Prisma.$PostSamplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostSamples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostSampleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostSamples
     * const postSamples = await prisma.postSample.findMany()
     * 
     * // Get first 10 PostSamples
     * const postSamples = await prisma.postSample.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postSampleWithIdOnly = await prisma.postSample.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostSampleFindManyArgs>(args?: SelectSubset<T, PostSampleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostSamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostSample.
     * @param {PostSampleCreateArgs} args - Arguments to create a PostSample.
     * @example
     * // Create one PostSample
     * const PostSample = await prisma.postSample.create({
     *   data: {
     *     // ... data to create a PostSample
     *   }
     * })
     * 
     */
    create<T extends PostSampleCreateArgs>(args: SelectSubset<T, PostSampleCreateArgs<ExtArgs>>): Prisma__PostSampleClient<$Result.GetResult<Prisma.$PostSamplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostSamples.
     * @param {PostSampleCreateManyArgs} args - Arguments to create many PostSamples.
     * @example
     * // Create many PostSamples
     * const postSample = await prisma.postSample.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostSampleCreateManyArgs>(args?: SelectSubset<T, PostSampleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostSample.
     * @param {PostSampleDeleteArgs} args - Arguments to delete one PostSample.
     * @example
     * // Delete one PostSample
     * const PostSample = await prisma.postSample.delete({
     *   where: {
     *     // ... filter to delete one PostSample
     *   }
     * })
     * 
     */
    delete<T extends PostSampleDeleteArgs>(args: SelectSubset<T, PostSampleDeleteArgs<ExtArgs>>): Prisma__PostSampleClient<$Result.GetResult<Prisma.$PostSamplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostSample.
     * @param {PostSampleUpdateArgs} args - Arguments to update one PostSample.
     * @example
     * // Update one PostSample
     * const postSample = await prisma.postSample.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostSampleUpdateArgs>(args: SelectSubset<T, PostSampleUpdateArgs<ExtArgs>>): Prisma__PostSampleClient<$Result.GetResult<Prisma.$PostSamplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostSamples.
     * @param {PostSampleDeleteManyArgs} args - Arguments to filter PostSamples to delete.
     * @example
     * // Delete a few PostSamples
     * const { count } = await prisma.postSample.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostSampleDeleteManyArgs>(args?: SelectSubset<T, PostSampleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostSamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostSampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostSamples
     * const postSample = await prisma.postSample.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostSampleUpdateManyArgs>(args: SelectSubset<T, PostSampleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostSample.
     * @param {PostSampleUpsertArgs} args - Arguments to update or create a PostSample.
     * @example
     * // Update or create a PostSample
     * const postSample = await prisma.postSample.upsert({
     *   create: {
     *     // ... data to create a PostSample
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostSample we want to update
     *   }
     * })
     */
    upsert<T extends PostSampleUpsertArgs>(args: SelectSubset<T, PostSampleUpsertArgs<ExtArgs>>): Prisma__PostSampleClient<$Result.GetResult<Prisma.$PostSamplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostSamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostSampleCountArgs} args - Arguments to filter PostSamples to count.
     * @example
     * // Count the number of PostSamples
     * const count = await prisma.postSample.count({
     *   where: {
     *     // ... the filter for the PostSamples we want to count
     *   }
     * })
    **/
    count<T extends PostSampleCountArgs>(
      args?: Subset<T, PostSampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostSampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostSample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostSampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostSampleAggregateArgs>(args: Subset<T, PostSampleAggregateArgs>): Prisma.PrismaPromise<GetPostSampleAggregateType<T>>

    /**
     * Group by PostSample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostSampleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostSampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostSampleGroupByArgs['orderBy'] }
        : { orderBy?: PostSampleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostSampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostSampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostSample model
   */
  readonly fields: PostSampleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostSample.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostSampleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    used<T extends PostSample$usedArgs<ExtArgs> = {}>(args?: Subset<T, PostSample$usedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends PostSample$userArgs<ExtArgs> = {}>(args?: Subset<T, PostSample$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostSample model
   */
  interface PostSampleFieldRefs {
    readonly id: FieldRef<"PostSample", 'Int'>
    readonly iduser: FieldRef<"PostSample", 'Int'>
    readonly img: FieldRef<"PostSample", 'String'>
    readonly name: FieldRef<"PostSample", 'String'>
    readonly descript: FieldRef<"PostSample", 'String'>
    readonly typ01: FieldRef<"PostSample", 'Json'>
    readonly typ02: FieldRef<"PostSample", 'Json'>
    readonly typ03: FieldRef<"PostSample", 'Json'>
    readonly date01: FieldRef<"PostSample", 'DateTime'>
    readonly date02: FieldRef<"PostSample", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostSample findUnique
   */
  export type PostSampleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostSample
     */
    select?: PostSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostSample
     */
    omit?: PostSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostSampleInclude<ExtArgs> | null
    /**
     * Filter, which PostSample to fetch.
     */
    where: PostSampleWhereUniqueInput
  }

  /**
   * PostSample findUniqueOrThrow
   */
  export type PostSampleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostSample
     */
    select?: PostSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostSample
     */
    omit?: PostSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostSampleInclude<ExtArgs> | null
    /**
     * Filter, which PostSample to fetch.
     */
    where: PostSampleWhereUniqueInput
  }

  /**
   * PostSample findFirst
   */
  export type PostSampleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostSample
     */
    select?: PostSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostSample
     */
    omit?: PostSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostSampleInclude<ExtArgs> | null
    /**
     * Filter, which PostSample to fetch.
     */
    where?: PostSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostSamples to fetch.
     */
    orderBy?: PostSampleOrderByWithRelationInput | PostSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostSamples.
     */
    cursor?: PostSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostSamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostSamples.
     */
    distinct?: PostSampleScalarFieldEnum | PostSampleScalarFieldEnum[]
  }

  /**
   * PostSample findFirstOrThrow
   */
  export type PostSampleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostSample
     */
    select?: PostSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostSample
     */
    omit?: PostSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostSampleInclude<ExtArgs> | null
    /**
     * Filter, which PostSample to fetch.
     */
    where?: PostSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostSamples to fetch.
     */
    orderBy?: PostSampleOrderByWithRelationInput | PostSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostSamples.
     */
    cursor?: PostSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostSamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostSamples.
     */
    distinct?: PostSampleScalarFieldEnum | PostSampleScalarFieldEnum[]
  }

  /**
   * PostSample findMany
   */
  export type PostSampleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostSample
     */
    select?: PostSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostSample
     */
    omit?: PostSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostSampleInclude<ExtArgs> | null
    /**
     * Filter, which PostSamples to fetch.
     */
    where?: PostSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostSamples to fetch.
     */
    orderBy?: PostSampleOrderByWithRelationInput | PostSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostSamples.
     */
    cursor?: PostSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostSamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostSamples.
     */
    distinct?: PostSampleScalarFieldEnum | PostSampleScalarFieldEnum[]
  }

  /**
   * PostSample create
   */
  export type PostSampleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostSample
     */
    select?: PostSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostSample
     */
    omit?: PostSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostSampleInclude<ExtArgs> | null
    /**
     * The data needed to create a PostSample.
     */
    data: XOR<PostSampleCreateInput, PostSampleUncheckedCreateInput>
  }

  /**
   * PostSample createMany
   */
  export type PostSampleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostSamples.
     */
    data: PostSampleCreateManyInput | PostSampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostSample update
   */
  export type PostSampleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostSample
     */
    select?: PostSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostSample
     */
    omit?: PostSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostSampleInclude<ExtArgs> | null
    /**
     * The data needed to update a PostSample.
     */
    data: XOR<PostSampleUpdateInput, PostSampleUncheckedUpdateInput>
    /**
     * Choose, which PostSample to update.
     */
    where: PostSampleWhereUniqueInput
  }

  /**
   * PostSample updateMany
   */
  export type PostSampleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostSamples.
     */
    data: XOR<PostSampleUpdateManyMutationInput, PostSampleUncheckedUpdateManyInput>
    /**
     * Filter which PostSamples to update
     */
    where?: PostSampleWhereInput
    /**
     * Limit how many PostSamples to update.
     */
    limit?: number
  }

  /**
   * PostSample upsert
   */
  export type PostSampleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostSample
     */
    select?: PostSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostSample
     */
    omit?: PostSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostSampleInclude<ExtArgs> | null
    /**
     * The filter to search for the PostSample to update in case it exists.
     */
    where: PostSampleWhereUniqueInput
    /**
     * In case the PostSample found by the `where` argument doesn't exist, create a new PostSample with this data.
     */
    create: XOR<PostSampleCreateInput, PostSampleUncheckedCreateInput>
    /**
     * In case the PostSample was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostSampleUpdateInput, PostSampleUncheckedUpdateInput>
  }

  /**
   * PostSample delete
   */
  export type PostSampleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostSample
     */
    select?: PostSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostSample
     */
    omit?: PostSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostSampleInclude<ExtArgs> | null
    /**
     * Filter which PostSample to delete.
     */
    where: PostSampleWhereUniqueInput
  }

  /**
   * PostSample deleteMany
   */
  export type PostSampleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostSamples to delete
     */
    where?: PostSampleWhereInput
    /**
     * Limit how many PostSamples to delete.
     */
    limit?: number
  }

  /**
   * PostSample.used
   */
  export type PostSample$usedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * PostSample.user
   */
  export type PostSample$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PostSample without action
   */
  export type PostSampleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostSample
     */
    select?: PostSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostSample
     */
    omit?: PostSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostSampleInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    iduser: number | null
    type: number | null
    amount: number | null
    status: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    iduser: number | null
    type: number | null
    amount: number | null
    status: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    iduser: number | null
    type: number | null
    amount: number | null
    data01: string | null
    status: number | null
    date01: Date | null
    date02: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    iduser: number | null
    type: number | null
    amount: number | null
    data01: string | null
    status: number | null
    date01: Date | null
    date02: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    iduser: number
    type: number
    amount: number
    data01: number
    status: number
    date01: number
    date02: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    iduser?: true
    type?: true
    amount?: true
    status?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    iduser?: true
    type?: true
    amount?: true
    status?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    iduser?: true
    type?: true
    amount?: true
    data01?: true
    status?: true
    date01?: true
    date02?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    iduser?: true
    type?: true
    amount?: true
    data01?: true
    status?: true
    date01?: true
    date02?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    iduser?: true
    type?: true
    amount?: true
    data01?: true
    status?: true
    date01?: true
    date02?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    iduser: number
    type: number
    amount: number
    data01: string
    status: number
    date01: Date
    date02: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iduser?: boolean
    type?: boolean
    amount?: boolean
    data01?: boolean
    status?: boolean
    date01?: boolean
    date02?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    iduser?: boolean
    type?: boolean
    amount?: boolean
    data01?: boolean
    status?: boolean
    date01?: boolean
    date02?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "iduser" | "type" | "amount" | "data01" | "status" | "date01" | "date02", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      iduser: number
      type: number
      amount: number
      data01: string
      status: number
      date01: Date
      date02: Date | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly iduser: FieldRef<"Payment", 'Int'>
    readonly type: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly data01: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'Int'>
    readonly date01: FieldRef<"Payment", 'DateTime'>
    readonly date02: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    descript: 'descript',
    sex: 'sex',
    address: 'address',
    job: 'job',
    birthdate: 'birthdate',
    portfolio: 'portfolio',
    twitter: 'twitter',
    reddit: 'reddit',
    github: 'github',
    facebook: 'facebook',
    mail: 'mail',
    phone: 'phone',
    linked: 'linked',
    ava: 'ava',
    pass: 'pass',
    role: 'role',
    date01: 'date01',
    date02: 'date02',
    accountType: 'accountType',
    emailVerified: 'emailVerified',
    verifyToken: 'verifyToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SharedPostsScalarFieldEnum: {
    userId: 'userId',
    postId: 'postId'
  };

  export type SharedPostsScalarFieldEnum = (typeof SharedPostsScalarFieldEnum)[keyof typeof SharedPostsScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    iduser: 'iduser',
    img: 'img',
    content: 'content',
    stat01: 'stat01',
    stat02: 'stat02',
    lang: 'lang',
    date01: 'date01',
    date02: 'date02',
    idSample: 'idSample',
    typ01: 'typ01'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostSampleScalarFieldEnum: {
    id: 'id',
    iduser: 'iduser',
    img: 'img',
    name: 'name',
    descript: 'descript',
    typ01: 'typ01',
    typ02: 'typ02',
    typ03: 'typ03',
    date01: 'date01',
    date02: 'date02'
  };

  export type PostSampleScalarFieldEnum = (typeof PostSampleScalarFieldEnum)[keyof typeof PostSampleScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    iduser: 'iduser',
    type: 'type',
    amount: 'amount',
    data01: 'data01',
    status: 'status',
    date01: 'date01',
    date02: 'date02'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    descript: 'descript',
    address: 'address',
    job: 'job',
    portfolio: 'portfolio',
    twitter: 'twitter',
    reddit: 'reddit',
    github: 'github',
    facebook: 'facebook',
    mail: 'mail',
    phone: 'phone',
    linked: 'linked',
    ava: 'ava',
    pass: 'pass',
    verifyToken: 'verifyToken'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const PostOrderByRelevanceFieldEnum: {
    img: 'img',
    content: 'content',
    lang: 'lang',
    typ01: 'typ01'
  };

  export type PostOrderByRelevanceFieldEnum = (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const PostSampleOrderByRelevanceFieldEnum: {
    img: 'img',
    name: 'name',
    descript: 'descript'
  };

  export type PostSampleOrderByRelevanceFieldEnum = (typeof PostSampleOrderByRelevanceFieldEnum)[keyof typeof PostSampleOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    data01: 'data01'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    descript?: StringNullableFilter<"User"> | string | null
    sex?: IntFilter<"User"> | number
    address?: StringNullableFilter<"User"> | string | null
    job?: StringNullableFilter<"User"> | string | null
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    portfolio?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    reddit?: StringNullableFilter<"User"> | string | null
    github?: StringNullableFilter<"User"> | string | null
    facebook?: StringNullableFilter<"User"> | string | null
    mail?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    linked?: StringNullableFilter<"User"> | string | null
    ava?: StringNullableFilter<"User"> | string | null
    pass?: StringNullableFilter<"User"> | string | null
    role?: IntFilter<"User"> | number
    date01?: DateTimeNullableFilter<"User"> | Date | string | null
    date02?: DateTimeNullableFilter<"User"> | Date | string | null
    accountType?: IntNullableFilter<"User"> | number | null
    emailVerified?: BoolFilter<"User"> | boolean
    verifyToken?: StringNullableFilter<"User"> | string | null
    Payment?: PaymentListRelationFilter
    posts?: PostListRelationFilter
    CV?: PostSampleListRelationFilter
    SharedPosts?: SharedPostsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    descript?: SortOrderInput | SortOrder
    sex?: SortOrder
    address?: SortOrderInput | SortOrder
    job?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    portfolio?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    reddit?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    linked?: SortOrderInput | SortOrder
    ava?: SortOrderInput | SortOrder
    pass?: SortOrderInput | SortOrder
    role?: SortOrder
    date01?: SortOrderInput | SortOrder
    date02?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    verifyToken?: SortOrderInput | SortOrder
    Payment?: PaymentOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    CV?: PostSampleOrderByRelationAggregateInput
    SharedPosts?: SharedPostsOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mail?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    descript?: StringNullableFilter<"User"> | string | null
    sex?: IntFilter<"User"> | number
    address?: StringNullableFilter<"User"> | string | null
    job?: StringNullableFilter<"User"> | string | null
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    portfolio?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    reddit?: StringNullableFilter<"User"> | string | null
    github?: StringNullableFilter<"User"> | string | null
    facebook?: StringNullableFilter<"User"> | string | null
    linked?: StringNullableFilter<"User"> | string | null
    ava?: StringNullableFilter<"User"> | string | null
    pass?: StringNullableFilter<"User"> | string | null
    role?: IntFilter<"User"> | number
    date01?: DateTimeNullableFilter<"User"> | Date | string | null
    date02?: DateTimeNullableFilter<"User"> | Date | string | null
    accountType?: IntNullableFilter<"User"> | number | null
    emailVerified?: BoolFilter<"User"> | boolean
    verifyToken?: StringNullableFilter<"User"> | string | null
    Payment?: PaymentListRelationFilter
    posts?: PostListRelationFilter
    CV?: PostSampleListRelationFilter
    SharedPosts?: SharedPostsListRelationFilter
  }, "id" | "mail" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    descript?: SortOrderInput | SortOrder
    sex?: SortOrder
    address?: SortOrderInput | SortOrder
    job?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    portfolio?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    reddit?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    linked?: SortOrderInput | SortOrder
    ava?: SortOrderInput | SortOrder
    pass?: SortOrderInput | SortOrder
    role?: SortOrder
    date01?: SortOrderInput | SortOrder
    date02?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    verifyToken?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    descript?: StringNullableWithAggregatesFilter<"User"> | string | null
    sex?: IntWithAggregatesFilter<"User"> | number
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    job?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthdate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    portfolio?: StringNullableWithAggregatesFilter<"User"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"User"> | string | null
    reddit?: StringNullableWithAggregatesFilter<"User"> | string | null
    github?: StringNullableWithAggregatesFilter<"User"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"User"> | string | null
    mail?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    linked?: StringNullableWithAggregatesFilter<"User"> | string | null
    ava?: StringNullableWithAggregatesFilter<"User"> | string | null
    pass?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: IntWithAggregatesFilter<"User"> | number
    date01?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    date02?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    accountType?: IntNullableWithAggregatesFilter<"User"> | number | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    verifyToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SharedPostsWhereInput = {
    AND?: SharedPostsWhereInput | SharedPostsWhereInput[]
    OR?: SharedPostsWhereInput[]
    NOT?: SharedPostsWhereInput | SharedPostsWhereInput[]
    userId?: IntFilter<"SharedPosts"> | number
    postId?: IntFilter<"SharedPosts"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SharedPostsOrderByWithRelationInput = {
    userId?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SharedPostsWhereUniqueInput = Prisma.AtLeast<{
    userId_postId?: SharedPostsUserIdPostIdCompoundUniqueInput
    AND?: SharedPostsWhereInput | SharedPostsWhereInput[]
    OR?: SharedPostsWhereInput[]
    NOT?: SharedPostsWhereInput | SharedPostsWhereInput[]
    userId?: IntFilter<"SharedPosts"> | number
    postId?: IntFilter<"SharedPosts"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_postId">

  export type SharedPostsOrderByWithAggregationInput = {
    userId?: SortOrder
    postId?: SortOrder
    _count?: SharedPostsCountOrderByAggregateInput
    _avg?: SharedPostsAvgOrderByAggregateInput
    _max?: SharedPostsMaxOrderByAggregateInput
    _min?: SharedPostsMinOrderByAggregateInput
    _sum?: SharedPostsSumOrderByAggregateInput
  }

  export type SharedPostsScalarWhereWithAggregatesInput = {
    AND?: SharedPostsScalarWhereWithAggregatesInput | SharedPostsScalarWhereWithAggregatesInput[]
    OR?: SharedPostsScalarWhereWithAggregatesInput[]
    NOT?: SharedPostsScalarWhereWithAggregatesInput | SharedPostsScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"SharedPosts"> | number
    postId?: IntWithAggregatesFilter<"SharedPosts"> | number
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    iduser?: IntNullableFilter<"Post"> | number | null
    img?: StringNullableFilter<"Post"> | string | null
    content?: StringNullableFilter<"Post"> | string | null
    stat01?: IntNullableFilter<"Post"> | number | null
    stat02?: IntNullableFilter<"Post"> | number | null
    lang?: StringFilter<"Post"> | string
    date01?: DateTimeNullableFilter<"Post"> | Date | string | null
    date02?: DateTimeNullableFilter<"Post"> | Date | string | null
    idSample?: IntFilter<"Post"> | number
    typ01?: StringNullableFilter<"Post"> | string | null
    PostSample?: XOR<PostSampleScalarRelationFilter, PostSampleWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    SharedPosts?: SharedPostsListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    iduser?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    stat01?: SortOrderInput | SortOrder
    stat02?: SortOrderInput | SortOrder
    lang?: SortOrder
    date01?: SortOrderInput | SortOrder
    date02?: SortOrderInput | SortOrder
    idSample?: SortOrder
    typ01?: SortOrderInput | SortOrder
    PostSample?: PostSampleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    SharedPosts?: SharedPostsOrderByRelationAggregateInput
    _relevance?: PostOrderByRelevanceInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    iduser?: IntNullableFilter<"Post"> | number | null
    img?: StringNullableFilter<"Post"> | string | null
    content?: StringNullableFilter<"Post"> | string | null
    stat01?: IntNullableFilter<"Post"> | number | null
    stat02?: IntNullableFilter<"Post"> | number | null
    lang?: StringFilter<"Post"> | string
    date01?: DateTimeNullableFilter<"Post"> | Date | string | null
    date02?: DateTimeNullableFilter<"Post"> | Date | string | null
    idSample?: IntFilter<"Post"> | number
    typ01?: StringNullableFilter<"Post"> | string | null
    PostSample?: XOR<PostSampleScalarRelationFilter, PostSampleWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    SharedPosts?: SharedPostsListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    iduser?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    stat01?: SortOrderInput | SortOrder
    stat02?: SortOrderInput | SortOrder
    lang?: SortOrder
    date01?: SortOrderInput | SortOrder
    date02?: SortOrderInput | SortOrder
    idSample?: SortOrder
    typ01?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    iduser?: IntNullableWithAggregatesFilter<"Post"> | number | null
    img?: StringNullableWithAggregatesFilter<"Post"> | string | null
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
    stat01?: IntNullableWithAggregatesFilter<"Post"> | number | null
    stat02?: IntNullableWithAggregatesFilter<"Post"> | number | null
    lang?: StringWithAggregatesFilter<"Post"> | string
    date01?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    date02?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    idSample?: IntWithAggregatesFilter<"Post"> | number
    typ01?: StringNullableWithAggregatesFilter<"Post"> | string | null
  }

  export type PostSampleWhereInput = {
    AND?: PostSampleWhereInput | PostSampleWhereInput[]
    OR?: PostSampleWhereInput[]
    NOT?: PostSampleWhereInput | PostSampleWhereInput[]
    id?: IntFilter<"PostSample"> | number
    iduser?: IntNullableFilter<"PostSample"> | number | null
    img?: StringNullableFilter<"PostSample"> | string | null
    name?: StringFilter<"PostSample"> | string
    descript?: StringNullableFilter<"PostSample"> | string | null
    typ01?: JsonNullableFilter<"PostSample">
    typ02?: JsonNullableFilter<"PostSample">
    typ03?: JsonNullableFilter<"PostSample">
    date01?: DateTimeNullableFilter<"PostSample"> | Date | string | null
    date02?: DateTimeNullableFilter<"PostSample"> | Date | string | null
    used?: PostListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PostSampleOrderByWithRelationInput = {
    id?: SortOrder
    iduser?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    name?: SortOrder
    descript?: SortOrderInput | SortOrder
    typ01?: SortOrderInput | SortOrder
    typ02?: SortOrderInput | SortOrder
    typ03?: SortOrderInput | SortOrder
    date01?: SortOrderInput | SortOrder
    date02?: SortOrderInput | SortOrder
    used?: PostOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    _relevance?: PostSampleOrderByRelevanceInput
  }

  export type PostSampleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostSampleWhereInput | PostSampleWhereInput[]
    OR?: PostSampleWhereInput[]
    NOT?: PostSampleWhereInput | PostSampleWhereInput[]
    iduser?: IntNullableFilter<"PostSample"> | number | null
    img?: StringNullableFilter<"PostSample"> | string | null
    name?: StringFilter<"PostSample"> | string
    descript?: StringNullableFilter<"PostSample"> | string | null
    typ01?: JsonNullableFilter<"PostSample">
    typ02?: JsonNullableFilter<"PostSample">
    typ03?: JsonNullableFilter<"PostSample">
    date01?: DateTimeNullableFilter<"PostSample"> | Date | string | null
    date02?: DateTimeNullableFilter<"PostSample"> | Date | string | null
    used?: PostListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PostSampleOrderByWithAggregationInput = {
    id?: SortOrder
    iduser?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    name?: SortOrder
    descript?: SortOrderInput | SortOrder
    typ01?: SortOrderInput | SortOrder
    typ02?: SortOrderInput | SortOrder
    typ03?: SortOrderInput | SortOrder
    date01?: SortOrderInput | SortOrder
    date02?: SortOrderInput | SortOrder
    _count?: PostSampleCountOrderByAggregateInput
    _avg?: PostSampleAvgOrderByAggregateInput
    _max?: PostSampleMaxOrderByAggregateInput
    _min?: PostSampleMinOrderByAggregateInput
    _sum?: PostSampleSumOrderByAggregateInput
  }

  export type PostSampleScalarWhereWithAggregatesInput = {
    AND?: PostSampleScalarWhereWithAggregatesInput | PostSampleScalarWhereWithAggregatesInput[]
    OR?: PostSampleScalarWhereWithAggregatesInput[]
    NOT?: PostSampleScalarWhereWithAggregatesInput | PostSampleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostSample"> | number
    iduser?: IntNullableWithAggregatesFilter<"PostSample"> | number | null
    img?: StringNullableWithAggregatesFilter<"PostSample"> | string | null
    name?: StringWithAggregatesFilter<"PostSample"> | string
    descript?: StringNullableWithAggregatesFilter<"PostSample"> | string | null
    typ01?: JsonNullableWithAggregatesFilter<"PostSample">
    typ02?: JsonNullableWithAggregatesFilter<"PostSample">
    typ03?: JsonNullableWithAggregatesFilter<"PostSample">
    date01?: DateTimeNullableWithAggregatesFilter<"PostSample"> | Date | string | null
    date02?: DateTimeNullableWithAggregatesFilter<"PostSample"> | Date | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    iduser?: IntFilter<"Payment"> | number
    type?: IntFilter<"Payment"> | number
    amount?: IntFilter<"Payment"> | number
    data01?: StringFilter<"Payment"> | string
    status?: IntFilter<"Payment"> | number
    date01?: DateTimeFilter<"Payment"> | Date | string
    date02?: DateTimeNullableFilter<"Payment"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    iduser?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    data01?: SortOrder
    status?: SortOrder
    date01?: SortOrder
    date02?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    iduser?: IntFilter<"Payment"> | number
    type?: IntFilter<"Payment"> | number
    amount?: IntFilter<"Payment"> | number
    data01?: StringFilter<"Payment"> | string
    status?: IntFilter<"Payment"> | number
    date01?: DateTimeFilter<"Payment"> | Date | string
    date02?: DateTimeNullableFilter<"Payment"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    iduser?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    data01?: SortOrder
    status?: SortOrder
    date01?: SortOrder
    date02?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    iduser?: IntWithAggregatesFilter<"Payment"> | number
    type?: IntWithAggregatesFilter<"Payment"> | number
    amount?: IntWithAggregatesFilter<"Payment"> | number
    data01?: StringWithAggregatesFilter<"Payment"> | string
    status?: IntWithAggregatesFilter<"Payment"> | number
    date01?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    date02?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
  }

  export type UserCreateInput = {
    name?: string | null
    descript?: string | null
    sex?: number
    address?: string | null
    job?: string | null
    birthdate?: Date | string | null
    portfolio?: string | null
    twitter?: string | null
    reddit?: string | null
    github?: string | null
    facebook?: string | null
    mail?: string | null
    phone?: string | null
    linked?: string | null
    ava?: string | null
    pass?: string | null
    role: number
    date01?: Date | string | null
    date02?: Date | string | null
    accountType?: number | null
    emailVerified?: boolean
    verifyToken?: string | null
    Payment?: PaymentCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    CV?: PostSampleCreateNestedManyWithoutUserInput
    SharedPosts?: SharedPostsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    descript?: string | null
    sex?: number
    address?: string | null
    job?: string | null
    birthdate?: Date | string | null
    portfolio?: string | null
    twitter?: string | null
    reddit?: string | null
    github?: string | null
    facebook?: string | null
    mail?: string | null
    phone?: string | null
    linked?: string | null
    ava?: string | null
    pass?: string | null
    role: number
    date01?: Date | string | null
    date02?: Date | string | null
    accountType?: number | null
    emailVerified?: boolean
    verifyToken?: string | null
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    CV?: PostSampleUncheckedCreateNestedManyWithoutUserInput
    SharedPosts?: SharedPostsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    reddit?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linked?: NullableStringFieldUpdateOperationsInput | string | null
    ava?: NullableStringFieldUpdateOperationsInput | string | null
    pass?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    Payment?: PaymentUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    CV?: PostSampleUpdateManyWithoutUserNestedInput
    SharedPosts?: SharedPostsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    reddit?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linked?: NullableStringFieldUpdateOperationsInput | string | null
    ava?: NullableStringFieldUpdateOperationsInput | string | null
    pass?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    CV?: PostSampleUncheckedUpdateManyWithoutUserNestedInput
    SharedPosts?: SharedPostsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    descript?: string | null
    sex?: number
    address?: string | null
    job?: string | null
    birthdate?: Date | string | null
    portfolio?: string | null
    twitter?: string | null
    reddit?: string | null
    github?: string | null
    facebook?: string | null
    mail?: string | null
    phone?: string | null
    linked?: string | null
    ava?: string | null
    pass?: string | null
    role: number
    date01?: Date | string | null
    date02?: Date | string | null
    accountType?: number | null
    emailVerified?: boolean
    verifyToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    reddit?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linked?: NullableStringFieldUpdateOperationsInput | string | null
    ava?: NullableStringFieldUpdateOperationsInput | string | null
    pass?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    reddit?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linked?: NullableStringFieldUpdateOperationsInput | string | null
    ava?: NullableStringFieldUpdateOperationsInput | string | null
    pass?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SharedPostsCreateInput = {
    post: PostCreateNestedOneWithoutSharedPostsInput
    user: UserCreateNestedOneWithoutSharedPostsInput
  }

  export type SharedPostsUncheckedCreateInput = {
    userId: number
    postId: number
  }

  export type SharedPostsUpdateInput = {
    post?: PostUpdateOneRequiredWithoutSharedPostsNestedInput
    user?: UserUpdateOneRequiredWithoutSharedPostsNestedInput
  }

  export type SharedPostsUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type SharedPostsCreateManyInput = {
    userId: number
    postId: number
  }

  export type SharedPostsUpdateManyMutationInput = {

  }

  export type SharedPostsUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateInput = {
    img?: string | null
    content?: string | null
    stat01?: number | null
    stat02?: number | null
    lang?: string
    date01?: Date | string | null
    date02?: Date | string | null
    typ01?: string | null
    PostSample: PostSampleCreateNestedOneWithoutUsedInput
    user?: UserCreateNestedOneWithoutPostsInput
    SharedPosts?: SharedPostsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    iduser?: number | null
    img?: string | null
    content?: string | null
    stat01?: number | null
    stat02?: number | null
    lang?: string
    date01?: Date | string | null
    date02?: Date | string | null
    idSample: number
    typ01?: string | null
    SharedPosts?: SharedPostsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    stat01?: NullableIntFieldUpdateOperationsInput | number | null
    stat02?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: StringFieldUpdateOperationsInput | string
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typ01?: NullableStringFieldUpdateOperationsInput | string | null
    PostSample?: PostSampleUpdateOneRequiredWithoutUsedNestedInput
    user?: UserUpdateOneWithoutPostsNestedInput
    SharedPosts?: SharedPostsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    iduser?: NullableIntFieldUpdateOperationsInput | number | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    stat01?: NullableIntFieldUpdateOperationsInput | number | null
    stat02?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: StringFieldUpdateOperationsInput | string
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idSample?: IntFieldUpdateOperationsInput | number
    typ01?: NullableStringFieldUpdateOperationsInput | string | null
    SharedPosts?: SharedPostsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    iduser?: number | null
    img?: string | null
    content?: string | null
    stat01?: number | null
    stat02?: number | null
    lang?: string
    date01?: Date | string | null
    date02?: Date | string | null
    idSample: number
    typ01?: string | null
  }

  export type PostUpdateManyMutationInput = {
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    stat01?: NullableIntFieldUpdateOperationsInput | number | null
    stat02?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: StringFieldUpdateOperationsInput | string
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typ01?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    iduser?: NullableIntFieldUpdateOperationsInput | number | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    stat01?: NullableIntFieldUpdateOperationsInput | number | null
    stat02?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: StringFieldUpdateOperationsInput | string
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idSample?: IntFieldUpdateOperationsInput | number
    typ01?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostSampleCreateInput = {
    img?: string | null
    name: string
    descript?: string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: Date | string | null
    date02?: Date | string | null
    used?: PostCreateNestedManyWithoutPostSampleInput
    user?: UserCreateNestedOneWithoutCVInput
  }

  export type PostSampleUncheckedCreateInput = {
    id?: number
    iduser?: number | null
    img?: string | null
    name: string
    descript?: string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: Date | string | null
    date02?: Date | string | null
    used?: PostUncheckedCreateNestedManyWithoutPostSampleInput
  }

  export type PostSampleUpdateInput = {
    img?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: PostUpdateManyWithoutPostSampleNestedInput
    user?: UserUpdateOneWithoutCVNestedInput
  }

  export type PostSampleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    iduser?: NullableIntFieldUpdateOperationsInput | number | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: PostUncheckedUpdateManyWithoutPostSampleNestedInput
  }

  export type PostSampleCreateManyInput = {
    id?: number
    iduser?: number | null
    img?: string | null
    name: string
    descript?: string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: Date | string | null
    date02?: Date | string | null
  }

  export type PostSampleUpdateManyMutationInput = {
    img?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostSampleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    iduser?: NullableIntFieldUpdateOperationsInput | number | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateInput = {
    type: number
    amount: number
    data01: string
    status: number
    date01?: Date | string
    date02?: Date | string | null
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    iduser: number
    type: number
    amount: number
    data01: string
    status: number
    date01?: Date | string
    date02?: Date | string | null
  }

  export type PaymentUpdateInput = {
    type?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    data01?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    date01?: DateTimeFieldUpdateOperationsInput | Date | string
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    iduser?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    data01?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    date01?: DateTimeFieldUpdateOperationsInput | Date | string
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateManyInput = {
    id?: number
    iduser: number
    type: number
    amount: number
    data01: string
    status: number
    date01?: Date | string
    date02?: Date | string | null
  }

  export type PaymentUpdateManyMutationInput = {
    type?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    data01?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    date01?: DateTimeFieldUpdateOperationsInput | Date | string
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    iduser?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    data01?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    date01?: DateTimeFieldUpdateOperationsInput | Date | string
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostSampleListRelationFilter = {
    every?: PostSampleWhereInput
    some?: PostSampleWhereInput
    none?: PostSampleWhereInput
  }

  export type SharedPostsListRelationFilter = {
    every?: SharedPostsWhereInput
    some?: SharedPostsWhereInput
    none?: SharedPostsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostSampleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharedPostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    descript?: SortOrder
    sex?: SortOrder
    address?: SortOrder
    job?: SortOrder
    birthdate?: SortOrder
    portfolio?: SortOrder
    twitter?: SortOrder
    reddit?: SortOrder
    github?: SortOrder
    facebook?: SortOrder
    mail?: SortOrder
    phone?: SortOrder
    linked?: SortOrder
    ava?: SortOrder
    pass?: SortOrder
    role?: SortOrder
    date01?: SortOrder
    date02?: SortOrder
    accountType?: SortOrder
    emailVerified?: SortOrder
    verifyToken?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    sex?: SortOrder
    role?: SortOrder
    accountType?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    descript?: SortOrder
    sex?: SortOrder
    address?: SortOrder
    job?: SortOrder
    birthdate?: SortOrder
    portfolio?: SortOrder
    twitter?: SortOrder
    reddit?: SortOrder
    github?: SortOrder
    facebook?: SortOrder
    mail?: SortOrder
    phone?: SortOrder
    linked?: SortOrder
    ava?: SortOrder
    pass?: SortOrder
    role?: SortOrder
    date01?: SortOrder
    date02?: SortOrder
    accountType?: SortOrder
    emailVerified?: SortOrder
    verifyToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    descript?: SortOrder
    sex?: SortOrder
    address?: SortOrder
    job?: SortOrder
    birthdate?: SortOrder
    portfolio?: SortOrder
    twitter?: SortOrder
    reddit?: SortOrder
    github?: SortOrder
    facebook?: SortOrder
    mail?: SortOrder
    phone?: SortOrder
    linked?: SortOrder
    ava?: SortOrder
    pass?: SortOrder
    role?: SortOrder
    date01?: SortOrder
    date02?: SortOrder
    accountType?: SortOrder
    emailVerified?: SortOrder
    verifyToken?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    sex?: SortOrder
    role?: SortOrder
    accountType?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SharedPostsUserIdPostIdCompoundUniqueInput = {
    userId: number
    postId: number
  }

  export type SharedPostsCountOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
  }

  export type SharedPostsAvgOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
  }

  export type SharedPostsMaxOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
  }

  export type SharedPostsMinOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
  }

  export type SharedPostsSumOrderByAggregateInput = {
    userId?: SortOrder
    postId?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PostSampleScalarRelationFilter = {
    is?: PostSampleWhereInput
    isNot?: PostSampleWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PostOrderByRelevanceInput = {
    fields: PostOrderByRelevanceFieldEnum | PostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
    img?: SortOrder
    content?: SortOrder
    stat01?: SortOrder
    stat02?: SortOrder
    lang?: SortOrder
    date01?: SortOrder
    date02?: SortOrder
    idSample?: SortOrder
    typ01?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
    stat01?: SortOrder
    stat02?: SortOrder
    idSample?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
    img?: SortOrder
    content?: SortOrder
    stat01?: SortOrder
    stat02?: SortOrder
    lang?: SortOrder
    date01?: SortOrder
    date02?: SortOrder
    idSample?: SortOrder
    typ01?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
    img?: SortOrder
    content?: SortOrder
    stat01?: SortOrder
    stat02?: SortOrder
    lang?: SortOrder
    date01?: SortOrder
    date02?: SortOrder
    idSample?: SortOrder
    typ01?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
    stat01?: SortOrder
    stat02?: SortOrder
    idSample?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PostSampleOrderByRelevanceInput = {
    fields: PostSampleOrderByRelevanceFieldEnum | PostSampleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostSampleCountOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
    img?: SortOrder
    name?: SortOrder
    descript?: SortOrder
    typ01?: SortOrder
    typ02?: SortOrder
    typ03?: SortOrder
    date01?: SortOrder
    date02?: SortOrder
  }

  export type PostSampleAvgOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
  }

  export type PostSampleMaxOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
    img?: SortOrder
    name?: SortOrder
    descript?: SortOrder
    date01?: SortOrder
    date02?: SortOrder
  }

  export type PostSampleMinOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
    img?: SortOrder
    name?: SortOrder
    descript?: SortOrder
    date01?: SortOrder
    date02?: SortOrder
  }

  export type PostSampleSumOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    data01?: SortOrder
    status?: SortOrder
    date01?: SortOrder
    date02?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    data01?: SortOrder
    status?: SortOrder
    date01?: SortOrder
    date02?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    data01?: SortOrder
    status?: SortOrder
    date01?: SortOrder
    date02?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    iduser?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostSampleCreateNestedManyWithoutUserInput = {
    create?: XOR<PostSampleCreateWithoutUserInput, PostSampleUncheckedCreateWithoutUserInput> | PostSampleCreateWithoutUserInput[] | PostSampleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostSampleCreateOrConnectWithoutUserInput | PostSampleCreateOrConnectWithoutUserInput[]
    createMany?: PostSampleCreateManyUserInputEnvelope
    connect?: PostSampleWhereUniqueInput | PostSampleWhereUniqueInput[]
  }

  export type SharedPostsCreateNestedManyWithoutUserInput = {
    create?: XOR<SharedPostsCreateWithoutUserInput, SharedPostsUncheckedCreateWithoutUserInput> | SharedPostsCreateWithoutUserInput[] | SharedPostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedPostsCreateOrConnectWithoutUserInput | SharedPostsCreateOrConnectWithoutUserInput[]
    createMany?: SharedPostsCreateManyUserInputEnvelope
    connect?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostSampleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostSampleCreateWithoutUserInput, PostSampleUncheckedCreateWithoutUserInput> | PostSampleCreateWithoutUserInput[] | PostSampleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostSampleCreateOrConnectWithoutUserInput | PostSampleCreateOrConnectWithoutUserInput[]
    createMany?: PostSampleCreateManyUserInputEnvelope
    connect?: PostSampleWhereUniqueInput | PostSampleWhereUniqueInput[]
  }

  export type SharedPostsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SharedPostsCreateWithoutUserInput, SharedPostsUncheckedCreateWithoutUserInput> | SharedPostsCreateWithoutUserInput[] | SharedPostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedPostsCreateOrConnectWithoutUserInput | SharedPostsCreateOrConnectWithoutUserInput[]
    createMany?: SharedPostsCreateManyUserInputEnvelope
    connect?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostSampleUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostSampleCreateWithoutUserInput, PostSampleUncheckedCreateWithoutUserInput> | PostSampleCreateWithoutUserInput[] | PostSampleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostSampleCreateOrConnectWithoutUserInput | PostSampleCreateOrConnectWithoutUserInput[]
    upsert?: PostSampleUpsertWithWhereUniqueWithoutUserInput | PostSampleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostSampleCreateManyUserInputEnvelope
    set?: PostSampleWhereUniqueInput | PostSampleWhereUniqueInput[]
    disconnect?: PostSampleWhereUniqueInput | PostSampleWhereUniqueInput[]
    delete?: PostSampleWhereUniqueInput | PostSampleWhereUniqueInput[]
    connect?: PostSampleWhereUniqueInput | PostSampleWhereUniqueInput[]
    update?: PostSampleUpdateWithWhereUniqueWithoutUserInput | PostSampleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostSampleUpdateManyWithWhereWithoutUserInput | PostSampleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostSampleScalarWhereInput | PostSampleScalarWhereInput[]
  }

  export type SharedPostsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SharedPostsCreateWithoutUserInput, SharedPostsUncheckedCreateWithoutUserInput> | SharedPostsCreateWithoutUserInput[] | SharedPostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedPostsCreateOrConnectWithoutUserInput | SharedPostsCreateOrConnectWithoutUserInput[]
    upsert?: SharedPostsUpsertWithWhereUniqueWithoutUserInput | SharedPostsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SharedPostsCreateManyUserInputEnvelope
    set?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    disconnect?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    delete?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    connect?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    update?: SharedPostsUpdateWithWhereUniqueWithoutUserInput | SharedPostsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SharedPostsUpdateManyWithWhereWithoutUserInput | SharedPostsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SharedPostsScalarWhereInput | SharedPostsScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostSampleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostSampleCreateWithoutUserInput, PostSampleUncheckedCreateWithoutUserInput> | PostSampleCreateWithoutUserInput[] | PostSampleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostSampleCreateOrConnectWithoutUserInput | PostSampleCreateOrConnectWithoutUserInput[]
    upsert?: PostSampleUpsertWithWhereUniqueWithoutUserInput | PostSampleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostSampleCreateManyUserInputEnvelope
    set?: PostSampleWhereUniqueInput | PostSampleWhereUniqueInput[]
    disconnect?: PostSampleWhereUniqueInput | PostSampleWhereUniqueInput[]
    delete?: PostSampleWhereUniqueInput | PostSampleWhereUniqueInput[]
    connect?: PostSampleWhereUniqueInput | PostSampleWhereUniqueInput[]
    update?: PostSampleUpdateWithWhereUniqueWithoutUserInput | PostSampleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostSampleUpdateManyWithWhereWithoutUserInput | PostSampleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostSampleScalarWhereInput | PostSampleScalarWhereInput[]
  }

  export type SharedPostsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SharedPostsCreateWithoutUserInput, SharedPostsUncheckedCreateWithoutUserInput> | SharedPostsCreateWithoutUserInput[] | SharedPostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedPostsCreateOrConnectWithoutUserInput | SharedPostsCreateOrConnectWithoutUserInput[]
    upsert?: SharedPostsUpsertWithWhereUniqueWithoutUserInput | SharedPostsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SharedPostsCreateManyUserInputEnvelope
    set?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    disconnect?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    delete?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    connect?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    update?: SharedPostsUpdateWithWhereUniqueWithoutUserInput | SharedPostsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SharedPostsUpdateManyWithWhereWithoutUserInput | SharedPostsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SharedPostsScalarWhereInput | SharedPostsScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutSharedPostsInput = {
    create?: XOR<PostCreateWithoutSharedPostsInput, PostUncheckedCreateWithoutSharedPostsInput>
    connectOrCreate?: PostCreateOrConnectWithoutSharedPostsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSharedPostsInput = {
    create?: XOR<UserCreateWithoutSharedPostsInput, UserUncheckedCreateWithoutSharedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutSharedPostsNestedInput = {
    create?: XOR<PostCreateWithoutSharedPostsInput, PostUncheckedCreateWithoutSharedPostsInput>
    connectOrCreate?: PostCreateOrConnectWithoutSharedPostsInput
    upsert?: PostUpsertWithoutSharedPostsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutSharedPostsInput, PostUpdateWithoutSharedPostsInput>, PostUncheckedUpdateWithoutSharedPostsInput>
  }

  export type UserUpdateOneRequiredWithoutSharedPostsNestedInput = {
    create?: XOR<UserCreateWithoutSharedPostsInput, UserUncheckedCreateWithoutSharedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedPostsInput
    upsert?: UserUpsertWithoutSharedPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharedPostsInput, UserUpdateWithoutSharedPostsInput>, UserUncheckedUpdateWithoutSharedPostsInput>
  }

  export type PostSampleCreateNestedOneWithoutUsedInput = {
    create?: XOR<PostSampleCreateWithoutUsedInput, PostSampleUncheckedCreateWithoutUsedInput>
    connectOrCreate?: PostSampleCreateOrConnectWithoutUsedInput
    connect?: PostSampleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type SharedPostsCreateNestedManyWithoutPostInput = {
    create?: XOR<SharedPostsCreateWithoutPostInput, SharedPostsUncheckedCreateWithoutPostInput> | SharedPostsCreateWithoutPostInput[] | SharedPostsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SharedPostsCreateOrConnectWithoutPostInput | SharedPostsCreateOrConnectWithoutPostInput[]
    createMany?: SharedPostsCreateManyPostInputEnvelope
    connect?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
  }

  export type SharedPostsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<SharedPostsCreateWithoutPostInput, SharedPostsUncheckedCreateWithoutPostInput> | SharedPostsCreateWithoutPostInput[] | SharedPostsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SharedPostsCreateOrConnectWithoutPostInput | SharedPostsCreateOrConnectWithoutPostInput[]
    createMany?: SharedPostsCreateManyPostInputEnvelope
    connect?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PostSampleUpdateOneRequiredWithoutUsedNestedInput = {
    create?: XOR<PostSampleCreateWithoutUsedInput, PostSampleUncheckedCreateWithoutUsedInput>
    connectOrCreate?: PostSampleCreateOrConnectWithoutUsedInput
    upsert?: PostSampleUpsertWithoutUsedInput
    connect?: PostSampleWhereUniqueInput
    update?: XOR<XOR<PostSampleUpdateToOneWithWhereWithoutUsedInput, PostSampleUpdateWithoutUsedInput>, PostSampleUncheckedUpdateWithoutUsedInput>
  }

  export type UserUpdateOneWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type SharedPostsUpdateManyWithoutPostNestedInput = {
    create?: XOR<SharedPostsCreateWithoutPostInput, SharedPostsUncheckedCreateWithoutPostInput> | SharedPostsCreateWithoutPostInput[] | SharedPostsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SharedPostsCreateOrConnectWithoutPostInput | SharedPostsCreateOrConnectWithoutPostInput[]
    upsert?: SharedPostsUpsertWithWhereUniqueWithoutPostInput | SharedPostsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SharedPostsCreateManyPostInputEnvelope
    set?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    disconnect?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    delete?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    connect?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    update?: SharedPostsUpdateWithWhereUniqueWithoutPostInput | SharedPostsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SharedPostsUpdateManyWithWhereWithoutPostInput | SharedPostsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SharedPostsScalarWhereInput | SharedPostsScalarWhereInput[]
  }

  export type SharedPostsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<SharedPostsCreateWithoutPostInput, SharedPostsUncheckedCreateWithoutPostInput> | SharedPostsCreateWithoutPostInput[] | SharedPostsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SharedPostsCreateOrConnectWithoutPostInput | SharedPostsCreateOrConnectWithoutPostInput[]
    upsert?: SharedPostsUpsertWithWhereUniqueWithoutPostInput | SharedPostsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SharedPostsCreateManyPostInputEnvelope
    set?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    disconnect?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    delete?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    connect?: SharedPostsWhereUniqueInput | SharedPostsWhereUniqueInput[]
    update?: SharedPostsUpdateWithWhereUniqueWithoutPostInput | SharedPostsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SharedPostsUpdateManyWithWhereWithoutPostInput | SharedPostsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SharedPostsScalarWhereInput | SharedPostsScalarWhereInput[]
  }

  export type PostCreateNestedManyWithoutPostSampleInput = {
    create?: XOR<PostCreateWithoutPostSampleInput, PostUncheckedCreateWithoutPostSampleInput> | PostCreateWithoutPostSampleInput[] | PostUncheckedCreateWithoutPostSampleInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPostSampleInput | PostCreateOrConnectWithoutPostSampleInput[]
    createMany?: PostCreateManyPostSampleInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCVInput = {
    create?: XOR<UserCreateWithoutCVInput, UserUncheckedCreateWithoutCVInput>
    connectOrCreate?: UserCreateOrConnectWithoutCVInput
    connect?: UserWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutPostSampleInput = {
    create?: XOR<PostCreateWithoutPostSampleInput, PostUncheckedCreateWithoutPostSampleInput> | PostCreateWithoutPostSampleInput[] | PostUncheckedCreateWithoutPostSampleInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPostSampleInput | PostCreateOrConnectWithoutPostSampleInput[]
    createMany?: PostCreateManyPostSampleInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutPostSampleNestedInput = {
    create?: XOR<PostCreateWithoutPostSampleInput, PostUncheckedCreateWithoutPostSampleInput> | PostCreateWithoutPostSampleInput[] | PostUncheckedCreateWithoutPostSampleInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPostSampleInput | PostCreateOrConnectWithoutPostSampleInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPostSampleInput | PostUpsertWithWhereUniqueWithoutPostSampleInput[]
    createMany?: PostCreateManyPostSampleInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPostSampleInput | PostUpdateWithWhereUniqueWithoutPostSampleInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPostSampleInput | PostUpdateManyWithWhereWithoutPostSampleInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCVNestedInput = {
    create?: XOR<UserCreateWithoutCVInput, UserUncheckedCreateWithoutCVInput>
    connectOrCreate?: UserCreateOrConnectWithoutCVInput
    upsert?: UserUpsertWithoutCVInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCVInput, UserUpdateWithoutCVInput>, UserUncheckedUpdateWithoutCVInput>
  }

  export type PostUncheckedUpdateManyWithoutPostSampleNestedInput = {
    create?: XOR<PostCreateWithoutPostSampleInput, PostUncheckedCreateWithoutPostSampleInput> | PostCreateWithoutPostSampleInput[] | PostUncheckedCreateWithoutPostSampleInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPostSampleInput | PostCreateOrConnectWithoutPostSampleInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPostSampleInput | PostUpsertWithWhereUniqueWithoutPostSampleInput[]
    createMany?: PostCreateManyPostSampleInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPostSampleInput | PostUpdateWithWhereUniqueWithoutPostSampleInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPostSampleInput | PostUpdateManyWithWhereWithoutPostSampleInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    upsert?: UserUpsertWithoutPaymentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentInput, UserUpdateWithoutPaymentInput>, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PaymentCreateWithoutUserInput = {
    type: number
    amount: number
    data01: string
    status: number
    date01?: Date | string
    date02?: Date | string | null
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: number
    type: number
    amount: number
    data01: string
    status: number
    date01?: Date | string
    date02?: Date | string | null
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    img?: string | null
    content?: string | null
    stat01?: number | null
    stat02?: number | null
    lang?: string
    date01?: Date | string | null
    date02?: Date | string | null
    typ01?: string | null
    PostSample: PostSampleCreateNestedOneWithoutUsedInput
    SharedPosts?: SharedPostsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    img?: string | null
    content?: string | null
    stat01?: number | null
    stat02?: number | null
    lang?: string
    date01?: Date | string | null
    date02?: Date | string | null
    idSample: number
    typ01?: string | null
    SharedPosts?: SharedPostsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostSampleCreateWithoutUserInput = {
    img?: string | null
    name: string
    descript?: string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: Date | string | null
    date02?: Date | string | null
    used?: PostCreateNestedManyWithoutPostSampleInput
  }

  export type PostSampleUncheckedCreateWithoutUserInput = {
    id?: number
    img?: string | null
    name: string
    descript?: string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: Date | string | null
    date02?: Date | string | null
    used?: PostUncheckedCreateNestedManyWithoutPostSampleInput
  }

  export type PostSampleCreateOrConnectWithoutUserInput = {
    where: PostSampleWhereUniqueInput
    create: XOR<PostSampleCreateWithoutUserInput, PostSampleUncheckedCreateWithoutUserInput>
  }

  export type PostSampleCreateManyUserInputEnvelope = {
    data: PostSampleCreateManyUserInput | PostSampleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SharedPostsCreateWithoutUserInput = {
    post: PostCreateNestedOneWithoutSharedPostsInput
  }

  export type SharedPostsUncheckedCreateWithoutUserInput = {
    postId: number
  }

  export type SharedPostsCreateOrConnectWithoutUserInput = {
    where: SharedPostsWhereUniqueInput
    create: XOR<SharedPostsCreateWithoutUserInput, SharedPostsUncheckedCreateWithoutUserInput>
  }

  export type SharedPostsCreateManyUserInputEnvelope = {
    data: SharedPostsCreateManyUserInput | SharedPostsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    iduser?: IntFilter<"Payment"> | number
    type?: IntFilter<"Payment"> | number
    amount?: IntFilter<"Payment"> | number
    data01?: StringFilter<"Payment"> | string
    status?: IntFilter<"Payment"> | number
    date01?: DateTimeFilter<"Payment"> | Date | string
    date02?: DateTimeNullableFilter<"Payment"> | Date | string | null
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    iduser?: IntNullableFilter<"Post"> | number | null
    img?: StringNullableFilter<"Post"> | string | null
    content?: StringNullableFilter<"Post"> | string | null
    stat01?: IntNullableFilter<"Post"> | number | null
    stat02?: IntNullableFilter<"Post"> | number | null
    lang?: StringFilter<"Post"> | string
    date01?: DateTimeNullableFilter<"Post"> | Date | string | null
    date02?: DateTimeNullableFilter<"Post"> | Date | string | null
    idSample?: IntFilter<"Post"> | number
    typ01?: StringNullableFilter<"Post"> | string | null
  }

  export type PostSampleUpsertWithWhereUniqueWithoutUserInput = {
    where: PostSampleWhereUniqueInput
    update: XOR<PostSampleUpdateWithoutUserInput, PostSampleUncheckedUpdateWithoutUserInput>
    create: XOR<PostSampleCreateWithoutUserInput, PostSampleUncheckedCreateWithoutUserInput>
  }

  export type PostSampleUpdateWithWhereUniqueWithoutUserInput = {
    where: PostSampleWhereUniqueInput
    data: XOR<PostSampleUpdateWithoutUserInput, PostSampleUncheckedUpdateWithoutUserInput>
  }

  export type PostSampleUpdateManyWithWhereWithoutUserInput = {
    where: PostSampleScalarWhereInput
    data: XOR<PostSampleUpdateManyMutationInput, PostSampleUncheckedUpdateManyWithoutUserInput>
  }

  export type PostSampleScalarWhereInput = {
    AND?: PostSampleScalarWhereInput | PostSampleScalarWhereInput[]
    OR?: PostSampleScalarWhereInput[]
    NOT?: PostSampleScalarWhereInput | PostSampleScalarWhereInput[]
    id?: IntFilter<"PostSample"> | number
    iduser?: IntNullableFilter<"PostSample"> | number | null
    img?: StringNullableFilter<"PostSample"> | string | null
    name?: StringFilter<"PostSample"> | string
    descript?: StringNullableFilter<"PostSample"> | string | null
    typ01?: JsonNullableFilter<"PostSample">
    typ02?: JsonNullableFilter<"PostSample">
    typ03?: JsonNullableFilter<"PostSample">
    date01?: DateTimeNullableFilter<"PostSample"> | Date | string | null
    date02?: DateTimeNullableFilter<"PostSample"> | Date | string | null
  }

  export type SharedPostsUpsertWithWhereUniqueWithoutUserInput = {
    where: SharedPostsWhereUniqueInput
    update: XOR<SharedPostsUpdateWithoutUserInput, SharedPostsUncheckedUpdateWithoutUserInput>
    create: XOR<SharedPostsCreateWithoutUserInput, SharedPostsUncheckedCreateWithoutUserInput>
  }

  export type SharedPostsUpdateWithWhereUniqueWithoutUserInput = {
    where: SharedPostsWhereUniqueInput
    data: XOR<SharedPostsUpdateWithoutUserInput, SharedPostsUncheckedUpdateWithoutUserInput>
  }

  export type SharedPostsUpdateManyWithWhereWithoutUserInput = {
    where: SharedPostsScalarWhereInput
    data: XOR<SharedPostsUpdateManyMutationInput, SharedPostsUncheckedUpdateManyWithoutUserInput>
  }

  export type SharedPostsScalarWhereInput = {
    AND?: SharedPostsScalarWhereInput | SharedPostsScalarWhereInput[]
    OR?: SharedPostsScalarWhereInput[]
    NOT?: SharedPostsScalarWhereInput | SharedPostsScalarWhereInput[]
    userId?: IntFilter<"SharedPosts"> | number
    postId?: IntFilter<"SharedPosts"> | number
  }

  export type PostCreateWithoutSharedPostsInput = {
    img?: string | null
    content?: string | null
    stat01?: number | null
    stat02?: number | null
    lang?: string
    date01?: Date | string | null
    date02?: Date | string | null
    typ01?: string | null
    PostSample: PostSampleCreateNestedOneWithoutUsedInput
    user?: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutSharedPostsInput = {
    id?: number
    iduser?: number | null
    img?: string | null
    content?: string | null
    stat01?: number | null
    stat02?: number | null
    lang?: string
    date01?: Date | string | null
    date02?: Date | string | null
    idSample: number
    typ01?: string | null
  }

  export type PostCreateOrConnectWithoutSharedPostsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSharedPostsInput, PostUncheckedCreateWithoutSharedPostsInput>
  }

  export type UserCreateWithoutSharedPostsInput = {
    name?: string | null
    descript?: string | null
    sex?: number
    address?: string | null
    job?: string | null
    birthdate?: Date | string | null
    portfolio?: string | null
    twitter?: string | null
    reddit?: string | null
    github?: string | null
    facebook?: string | null
    mail?: string | null
    phone?: string | null
    linked?: string | null
    ava?: string | null
    pass?: string | null
    role: number
    date01?: Date | string | null
    date02?: Date | string | null
    accountType?: number | null
    emailVerified?: boolean
    verifyToken?: string | null
    Payment?: PaymentCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    CV?: PostSampleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSharedPostsInput = {
    id?: number
    name?: string | null
    descript?: string | null
    sex?: number
    address?: string | null
    job?: string | null
    birthdate?: Date | string | null
    portfolio?: string | null
    twitter?: string | null
    reddit?: string | null
    github?: string | null
    facebook?: string | null
    mail?: string | null
    phone?: string | null
    linked?: string | null
    ava?: string | null
    pass?: string | null
    role: number
    date01?: Date | string | null
    date02?: Date | string | null
    accountType?: number | null
    emailVerified?: boolean
    verifyToken?: string | null
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    CV?: PostSampleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSharedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedPostsInput, UserUncheckedCreateWithoutSharedPostsInput>
  }

  export type PostUpsertWithoutSharedPostsInput = {
    update: XOR<PostUpdateWithoutSharedPostsInput, PostUncheckedUpdateWithoutSharedPostsInput>
    create: XOR<PostCreateWithoutSharedPostsInput, PostUncheckedCreateWithoutSharedPostsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutSharedPostsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutSharedPostsInput, PostUncheckedUpdateWithoutSharedPostsInput>
  }

  export type PostUpdateWithoutSharedPostsInput = {
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    stat01?: NullableIntFieldUpdateOperationsInput | number | null
    stat02?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: StringFieldUpdateOperationsInput | string
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typ01?: NullableStringFieldUpdateOperationsInput | string | null
    PostSample?: PostSampleUpdateOneRequiredWithoutUsedNestedInput
    user?: UserUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutSharedPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    iduser?: NullableIntFieldUpdateOperationsInput | number | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    stat01?: NullableIntFieldUpdateOperationsInput | number | null
    stat02?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: StringFieldUpdateOperationsInput | string
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idSample?: IntFieldUpdateOperationsInput | number
    typ01?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutSharedPostsInput = {
    update: XOR<UserUpdateWithoutSharedPostsInput, UserUncheckedUpdateWithoutSharedPostsInput>
    create: XOR<UserCreateWithoutSharedPostsInput, UserUncheckedCreateWithoutSharedPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharedPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharedPostsInput, UserUncheckedUpdateWithoutSharedPostsInput>
  }

  export type UserUpdateWithoutSharedPostsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    reddit?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linked?: NullableStringFieldUpdateOperationsInput | string | null
    ava?: NullableStringFieldUpdateOperationsInput | string | null
    pass?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    Payment?: PaymentUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    CV?: PostSampleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    reddit?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linked?: NullableStringFieldUpdateOperationsInput | string | null
    ava?: NullableStringFieldUpdateOperationsInput | string | null
    pass?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    CV?: PostSampleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostSampleCreateWithoutUsedInput = {
    img?: string | null
    name: string
    descript?: string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: Date | string | null
    date02?: Date | string | null
    user?: UserCreateNestedOneWithoutCVInput
  }

  export type PostSampleUncheckedCreateWithoutUsedInput = {
    id?: number
    iduser?: number | null
    img?: string | null
    name: string
    descript?: string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: Date | string | null
    date02?: Date | string | null
  }

  export type PostSampleCreateOrConnectWithoutUsedInput = {
    where: PostSampleWhereUniqueInput
    create: XOR<PostSampleCreateWithoutUsedInput, PostSampleUncheckedCreateWithoutUsedInput>
  }

  export type UserCreateWithoutPostsInput = {
    name?: string | null
    descript?: string | null
    sex?: number
    address?: string | null
    job?: string | null
    birthdate?: Date | string | null
    portfolio?: string | null
    twitter?: string | null
    reddit?: string | null
    github?: string | null
    facebook?: string | null
    mail?: string | null
    phone?: string | null
    linked?: string | null
    ava?: string | null
    pass?: string | null
    role: number
    date01?: Date | string | null
    date02?: Date | string | null
    accountType?: number | null
    emailVerified?: boolean
    verifyToken?: string | null
    Payment?: PaymentCreateNestedManyWithoutUserInput
    CV?: PostSampleCreateNestedManyWithoutUserInput
    SharedPosts?: SharedPostsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    name?: string | null
    descript?: string | null
    sex?: number
    address?: string | null
    job?: string | null
    birthdate?: Date | string | null
    portfolio?: string | null
    twitter?: string | null
    reddit?: string | null
    github?: string | null
    facebook?: string | null
    mail?: string | null
    phone?: string | null
    linked?: string | null
    ava?: string | null
    pass?: string | null
    role: number
    date01?: Date | string | null
    date02?: Date | string | null
    accountType?: number | null
    emailVerified?: boolean
    verifyToken?: string | null
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    CV?: PostSampleUncheckedCreateNestedManyWithoutUserInput
    SharedPosts?: SharedPostsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type SharedPostsCreateWithoutPostInput = {
    user: UserCreateNestedOneWithoutSharedPostsInput
  }

  export type SharedPostsUncheckedCreateWithoutPostInput = {
    userId: number
  }

  export type SharedPostsCreateOrConnectWithoutPostInput = {
    where: SharedPostsWhereUniqueInput
    create: XOR<SharedPostsCreateWithoutPostInput, SharedPostsUncheckedCreateWithoutPostInput>
  }

  export type SharedPostsCreateManyPostInputEnvelope = {
    data: SharedPostsCreateManyPostInput | SharedPostsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostSampleUpsertWithoutUsedInput = {
    update: XOR<PostSampleUpdateWithoutUsedInput, PostSampleUncheckedUpdateWithoutUsedInput>
    create: XOR<PostSampleCreateWithoutUsedInput, PostSampleUncheckedCreateWithoutUsedInput>
    where?: PostSampleWhereInput
  }

  export type PostSampleUpdateToOneWithWhereWithoutUsedInput = {
    where?: PostSampleWhereInput
    data: XOR<PostSampleUpdateWithoutUsedInput, PostSampleUncheckedUpdateWithoutUsedInput>
  }

  export type PostSampleUpdateWithoutUsedInput = {
    img?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutCVNestedInput
  }

  export type PostSampleUncheckedUpdateWithoutUsedInput = {
    id?: IntFieldUpdateOperationsInput | number
    iduser?: NullableIntFieldUpdateOperationsInput | number | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    reddit?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linked?: NullableStringFieldUpdateOperationsInput | string | null
    ava?: NullableStringFieldUpdateOperationsInput | string | null
    pass?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    Payment?: PaymentUpdateManyWithoutUserNestedInput
    CV?: PostSampleUpdateManyWithoutUserNestedInput
    SharedPosts?: SharedPostsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    reddit?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linked?: NullableStringFieldUpdateOperationsInput | string | null
    ava?: NullableStringFieldUpdateOperationsInput | string | null
    pass?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    CV?: PostSampleUncheckedUpdateManyWithoutUserNestedInput
    SharedPosts?: SharedPostsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SharedPostsUpsertWithWhereUniqueWithoutPostInput = {
    where: SharedPostsWhereUniqueInput
    update: XOR<SharedPostsUpdateWithoutPostInput, SharedPostsUncheckedUpdateWithoutPostInput>
    create: XOR<SharedPostsCreateWithoutPostInput, SharedPostsUncheckedCreateWithoutPostInput>
  }

  export type SharedPostsUpdateWithWhereUniqueWithoutPostInput = {
    where: SharedPostsWhereUniqueInput
    data: XOR<SharedPostsUpdateWithoutPostInput, SharedPostsUncheckedUpdateWithoutPostInput>
  }

  export type SharedPostsUpdateManyWithWhereWithoutPostInput = {
    where: SharedPostsScalarWhereInput
    data: XOR<SharedPostsUpdateManyMutationInput, SharedPostsUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCreateWithoutPostSampleInput = {
    img?: string | null
    content?: string | null
    stat01?: number | null
    stat02?: number | null
    lang?: string
    date01?: Date | string | null
    date02?: Date | string | null
    typ01?: string | null
    user?: UserCreateNestedOneWithoutPostsInput
    SharedPosts?: SharedPostsCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostSampleInput = {
    id?: number
    iduser?: number | null
    img?: string | null
    content?: string | null
    stat01?: number | null
    stat02?: number | null
    lang?: string
    date01?: Date | string | null
    date02?: Date | string | null
    typ01?: string | null
    SharedPosts?: SharedPostsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostSampleInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostSampleInput, PostUncheckedCreateWithoutPostSampleInput>
  }

  export type PostCreateManyPostSampleInputEnvelope = {
    data: PostCreateManyPostSampleInput | PostCreateManyPostSampleInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCVInput = {
    name?: string | null
    descript?: string | null
    sex?: number
    address?: string | null
    job?: string | null
    birthdate?: Date | string | null
    portfolio?: string | null
    twitter?: string | null
    reddit?: string | null
    github?: string | null
    facebook?: string | null
    mail?: string | null
    phone?: string | null
    linked?: string | null
    ava?: string | null
    pass?: string | null
    role: number
    date01?: Date | string | null
    date02?: Date | string | null
    accountType?: number | null
    emailVerified?: boolean
    verifyToken?: string | null
    Payment?: PaymentCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    SharedPosts?: SharedPostsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCVInput = {
    id?: number
    name?: string | null
    descript?: string | null
    sex?: number
    address?: string | null
    job?: string | null
    birthdate?: Date | string | null
    portfolio?: string | null
    twitter?: string | null
    reddit?: string | null
    github?: string | null
    facebook?: string | null
    mail?: string | null
    phone?: string | null
    linked?: string | null
    ava?: string | null
    pass?: string | null
    role: number
    date01?: Date | string | null
    date02?: Date | string | null
    accountType?: number | null
    emailVerified?: boolean
    verifyToken?: string | null
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    SharedPosts?: SharedPostsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCVInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCVInput, UserUncheckedCreateWithoutCVInput>
  }

  export type PostUpsertWithWhereUniqueWithoutPostSampleInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutPostSampleInput, PostUncheckedUpdateWithoutPostSampleInput>
    create: XOR<PostCreateWithoutPostSampleInput, PostUncheckedCreateWithoutPostSampleInput>
  }

  export type PostUpdateWithWhereUniqueWithoutPostSampleInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutPostSampleInput, PostUncheckedUpdateWithoutPostSampleInput>
  }

  export type PostUpdateManyWithWhereWithoutPostSampleInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostSampleInput>
  }

  export type UserUpsertWithoutCVInput = {
    update: XOR<UserUpdateWithoutCVInput, UserUncheckedUpdateWithoutCVInput>
    create: XOR<UserCreateWithoutCVInput, UserUncheckedCreateWithoutCVInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCVInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCVInput, UserUncheckedUpdateWithoutCVInput>
  }

  export type UserUpdateWithoutCVInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    reddit?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linked?: NullableStringFieldUpdateOperationsInput | string | null
    ava?: NullableStringFieldUpdateOperationsInput | string | null
    pass?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    Payment?: PaymentUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    SharedPosts?: SharedPostsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCVInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    reddit?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linked?: NullableStringFieldUpdateOperationsInput | string | null
    ava?: NullableStringFieldUpdateOperationsInput | string | null
    pass?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    SharedPosts?: SharedPostsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentInput = {
    name?: string | null
    descript?: string | null
    sex?: number
    address?: string | null
    job?: string | null
    birthdate?: Date | string | null
    portfolio?: string | null
    twitter?: string | null
    reddit?: string | null
    github?: string | null
    facebook?: string | null
    mail?: string | null
    phone?: string | null
    linked?: string | null
    ava?: string | null
    pass?: string | null
    role: number
    date01?: Date | string | null
    date02?: Date | string | null
    accountType?: number | null
    emailVerified?: boolean
    verifyToken?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    CV?: PostSampleCreateNestedManyWithoutUserInput
    SharedPosts?: SharedPostsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentInput = {
    id?: number
    name?: string | null
    descript?: string | null
    sex?: number
    address?: string | null
    job?: string | null
    birthdate?: Date | string | null
    portfolio?: string | null
    twitter?: string | null
    reddit?: string | null
    github?: string | null
    facebook?: string | null
    mail?: string | null
    phone?: string | null
    linked?: string | null
    ava?: string | null
    pass?: string | null
    role: number
    date01?: Date | string | null
    date02?: Date | string | null
    accountType?: number | null
    emailVerified?: boolean
    verifyToken?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    CV?: PostSampleUncheckedCreateNestedManyWithoutUserInput
    SharedPosts?: SharedPostsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpsertWithoutPaymentInput = {
    update: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateWithoutPaymentInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    reddit?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linked?: NullableStringFieldUpdateOperationsInput | string | null
    ava?: NullableStringFieldUpdateOperationsInput | string | null
    pass?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    CV?: PostSampleUpdateManyWithoutUserNestedInput
    SharedPosts?: SharedPostsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    reddit?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    linked?: NullableStringFieldUpdateOperationsInput | string | null
    ava?: NullableStringFieldUpdateOperationsInput | string | null
    pass?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableIntFieldUpdateOperationsInput | number | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    CV?: PostSampleUncheckedUpdateManyWithoutUserNestedInput
    SharedPosts?: SharedPostsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentCreateManyUserInput = {
    id?: number
    type: number
    amount: number
    data01: string
    status: number
    date01?: Date | string
    date02?: Date | string | null
  }

  export type PostCreateManyUserInput = {
    id?: number
    img?: string | null
    content?: string | null
    stat01?: number | null
    stat02?: number | null
    lang?: string
    date01?: Date | string | null
    date02?: Date | string | null
    idSample: number
    typ01?: string | null
  }

  export type PostSampleCreateManyUserInput = {
    id?: number
    img?: string | null
    name: string
    descript?: string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: Date | string | null
    date02?: Date | string | null
  }

  export type SharedPostsCreateManyUserInput = {
    postId: number
  }

  export type PaymentUpdateWithoutUserInput = {
    type?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    data01?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    date01?: DateTimeFieldUpdateOperationsInput | Date | string
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    data01?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    date01?: DateTimeFieldUpdateOperationsInput | Date | string
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    data01?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    date01?: DateTimeFieldUpdateOperationsInput | Date | string
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostUpdateWithoutUserInput = {
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    stat01?: NullableIntFieldUpdateOperationsInput | number | null
    stat02?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: StringFieldUpdateOperationsInput | string
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typ01?: NullableStringFieldUpdateOperationsInput | string | null
    PostSample?: PostSampleUpdateOneRequiredWithoutUsedNestedInput
    SharedPosts?: SharedPostsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    stat01?: NullableIntFieldUpdateOperationsInput | number | null
    stat02?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: StringFieldUpdateOperationsInput | string
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idSample?: IntFieldUpdateOperationsInput | number
    typ01?: NullableStringFieldUpdateOperationsInput | string | null
    SharedPosts?: SharedPostsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    stat01?: NullableIntFieldUpdateOperationsInput | number | null
    stat02?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: StringFieldUpdateOperationsInput | string
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idSample?: IntFieldUpdateOperationsInput | number
    typ01?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostSampleUpdateWithoutUserInput = {
    img?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: PostUpdateManyWithoutPostSampleNestedInput
  }

  export type PostSampleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    img?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: PostUncheckedUpdateManyWithoutPostSampleNestedInput
  }

  export type PostSampleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    img?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    typ01?: NullableJsonNullValueInput | InputJsonValue
    typ02?: NullableJsonNullValueInput | InputJsonValue
    typ03?: NullableJsonNullValueInput | InputJsonValue
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SharedPostsUpdateWithoutUserInput = {
    post?: PostUpdateOneRequiredWithoutSharedPostsNestedInput
  }

  export type SharedPostsUncheckedUpdateWithoutUserInput = {
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type SharedPostsUncheckedUpdateManyWithoutUserInput = {
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type SharedPostsCreateManyPostInput = {
    userId: number
  }

  export type SharedPostsUpdateWithoutPostInput = {
    user?: UserUpdateOneRequiredWithoutSharedPostsNestedInput
  }

  export type SharedPostsUncheckedUpdateWithoutPostInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SharedPostsUncheckedUpdateManyWithoutPostInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyPostSampleInput = {
    id?: number
    iduser?: number | null
    img?: string | null
    content?: string | null
    stat01?: number | null
    stat02?: number | null
    lang?: string
    date01?: Date | string | null
    date02?: Date | string | null
    typ01?: string | null
  }

  export type PostUpdateWithoutPostSampleInput = {
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    stat01?: NullableIntFieldUpdateOperationsInput | number | null
    stat02?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: StringFieldUpdateOperationsInput | string
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typ01?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutPostsNestedInput
    SharedPosts?: SharedPostsUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostSampleInput = {
    id?: IntFieldUpdateOperationsInput | number
    iduser?: NullableIntFieldUpdateOperationsInput | number | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    stat01?: NullableIntFieldUpdateOperationsInput | number | null
    stat02?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: StringFieldUpdateOperationsInput | string
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typ01?: NullableStringFieldUpdateOperationsInput | string | null
    SharedPosts?: SharedPostsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutPostSampleInput = {
    id?: IntFieldUpdateOperationsInput | number
    iduser?: NullableIntFieldUpdateOperationsInput | number | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    stat01?: NullableIntFieldUpdateOperationsInput | number | null
    stat02?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: StringFieldUpdateOperationsInput | string
    date01?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date02?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typ01?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}