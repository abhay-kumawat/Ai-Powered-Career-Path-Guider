
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CareerPath
 * 
 */
export type CareerPath = $Result.DefaultSelection<Prisma.$CareerPathPayload>
/**
 * Model Roadmap
 * 
 */
export type Roadmap = $Result.DefaultSelection<Prisma.$RoadmapPayload>
/**
 * Model RoadmapItem
 * 
 */
export type RoadmapItem = $Result.DefaultSelection<Prisma.$RoadmapItemPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CareerPaths
 * const careerPaths = await prisma.careerPath.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CareerPaths
   * const careerPaths = await prisma.careerPath.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.careerPath`: Exposes CRUD operations for the **CareerPath** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CareerPaths
    * const careerPaths = await prisma.careerPath.findMany()
    * ```
    */
  get careerPath(): Prisma.CareerPathDelegate<ExtArgs>;

  /**
   * `prisma.roadmap`: Exposes CRUD operations for the **Roadmap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roadmaps
    * const roadmaps = await prisma.roadmap.findMany()
    * ```
    */
  get roadmap(): Prisma.RoadmapDelegate<ExtArgs>;

  /**
   * `prisma.roadmapItem`: Exposes CRUD operations for the **RoadmapItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoadmapItems
    * const roadmapItems = await prisma.roadmapItem.findMany()
    * ```
    */
  get roadmapItem(): Prisma.RoadmapItemDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    CareerPath: 'CareerPath',
    Roadmap: 'Roadmap',
    RoadmapItem: 'RoadmapItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'careerPath' | 'roadmap' | 'roadmapItem'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      CareerPath: {
        payload: Prisma.$CareerPathPayload<ExtArgs>
        fields: Prisma.CareerPathFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerPathFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPathPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerPathFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPathPayload>
          }
          findFirst: {
            args: Prisma.CareerPathFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPathPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerPathFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPathPayload>
          }
          findMany: {
            args: Prisma.CareerPathFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPathPayload>[]
          }
          create: {
            args: Prisma.CareerPathCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPathPayload>
          }
          delete: {
            args: Prisma.CareerPathDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPathPayload>
          }
          update: {
            args: Prisma.CareerPathUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPathPayload>
          }
          deleteMany: {
            args: Prisma.CareerPathDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CareerPathUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CareerPathUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CareerPathPayload>
          }
          aggregate: {
            args: Prisma.CareerPathAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCareerPath>
          }
          groupBy: {
            args: Prisma.CareerPathGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CareerPathGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerPathCountArgs<ExtArgs>,
            result: $Utils.Optional<CareerPathCountAggregateOutputType> | number
          }
        }
      }
      Roadmap: {
        payload: Prisma.$RoadmapPayload<ExtArgs>
        fields: Prisma.RoadmapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoadmapFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoadmapFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>
          }
          findFirst: {
            args: Prisma.RoadmapFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoadmapFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>
          }
          findMany: {
            args: Prisma.RoadmapFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>[]
          }
          create: {
            args: Prisma.RoadmapCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>
          }
          delete: {
            args: Prisma.RoadmapDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>
          }
          update: {
            args: Prisma.RoadmapUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>
          }
          deleteMany: {
            args: Prisma.RoadmapDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoadmapUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoadmapUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>
          }
          aggregate: {
            args: Prisma.RoadmapAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoadmap>
          }
          groupBy: {
            args: Prisma.RoadmapGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoadmapGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoadmapCountArgs<ExtArgs>,
            result: $Utils.Optional<RoadmapCountAggregateOutputType> | number
          }
        }
      }
      RoadmapItem: {
        payload: Prisma.$RoadmapItemPayload<ExtArgs>
        fields: Prisma.RoadmapItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoadmapItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoadmapItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>
          }
          findFirst: {
            args: Prisma.RoadmapItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoadmapItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>
          }
          findMany: {
            args: Prisma.RoadmapItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>[]
          }
          create: {
            args: Prisma.RoadmapItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>
          }
          delete: {
            args: Prisma.RoadmapItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>
          }
          update: {
            args: Prisma.RoadmapItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>
          }
          deleteMany: {
            args: Prisma.RoadmapItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoadmapItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoadmapItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>
          }
          aggregate: {
            args: Prisma.RoadmapItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoadmapItem>
          }
          groupBy: {
            args: Prisma.RoadmapItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoadmapItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoadmapItemCountArgs<ExtArgs>,
            result: $Utils.Optional<RoadmapItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CareerPathCountOutputType
   */

  export type CareerPathCountOutputType = {
    roadmaps: number
  }

  export type CareerPathCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roadmaps?: boolean | CareerPathCountOutputTypeCountRoadmapsArgs
  }

  // Custom InputTypes

  /**
   * CareerPathCountOutputType without action
   */
  export type CareerPathCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerPathCountOutputType
     */
    select?: CareerPathCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CareerPathCountOutputType without action
   */
  export type CareerPathCountOutputTypeCountRoadmapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadmapWhereInput
  }



  /**
   * Count Type RoadmapCountOutputType
   */

  export type RoadmapCountOutputType = {
    items: number
  }

  export type RoadmapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | RoadmapCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes

  /**
   * RoadmapCountOutputType without action
   */
  export type RoadmapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapCountOutputType
     */
    select?: RoadmapCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RoadmapCountOutputType without action
   */
  export type RoadmapCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadmapItemWhereInput
  }



  /**
   * Models
   */

  /**
   * Model CareerPath
   */

  export type AggregateCareerPath = {
    _count: CareerPathCountAggregateOutputType | null
    _avg: CareerPathAvgAggregateOutputType | null
    _sum: CareerPathSumAggregateOutputType | null
    _min: CareerPathMinAggregateOutputType | null
    _max: CareerPathMaxAggregateOutputType | null
  }

  export type CareerPathAvgAggregateOutputType = {
    avgSalary: Decimal | null
    growthRate: Decimal | null
    matchScore: number | null
  }

  export type CareerPathSumAggregateOutputType = {
    avgSalary: Decimal | null
    growthRate: Decimal | null
    matchScore: number | null
  }

  export type CareerPathMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    avgSalary: Decimal | null
    growthRate: Decimal | null
    difficulty: string | null
    matchScore: number | null
    salary: string | null
    growth: string | null
    demand: string | null
    requiredSkills: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CareerPathMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    avgSalary: Decimal | null
    growthRate: Decimal | null
    difficulty: string | null
    matchScore: number | null
    salary: string | null
    growth: string | null
    demand: string | null
    requiredSkills: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CareerPathCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    avgSalary: number
    growthRate: number
    difficulty: number
    matchScore: number
    salary: number
    growth: number
    demand: number
    requiredSkills: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CareerPathAvgAggregateInputType = {
    avgSalary?: true
    growthRate?: true
    matchScore?: true
  }

  export type CareerPathSumAggregateInputType = {
    avgSalary?: true
    growthRate?: true
    matchScore?: true
  }

  export type CareerPathMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    avgSalary?: true
    growthRate?: true
    difficulty?: true
    matchScore?: true
    salary?: true
    growth?: true
    demand?: true
    requiredSkills?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CareerPathMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    avgSalary?: true
    growthRate?: true
    difficulty?: true
    matchScore?: true
    salary?: true
    growth?: true
    demand?: true
    requiredSkills?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CareerPathCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    avgSalary?: true
    growthRate?: true
    difficulty?: true
    matchScore?: true
    salary?: true
    growth?: true
    demand?: true
    requiredSkills?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CareerPathAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareerPath to aggregate.
     */
    where?: CareerPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerPaths to fetch.
     */
    orderBy?: CareerPathOrderByWithRelationInput | CareerPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CareerPaths
    **/
    _count?: true | CareerPathCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerPathAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerPathSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerPathMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerPathMaxAggregateInputType
  }

  export type GetCareerPathAggregateType<T extends CareerPathAggregateArgs> = {
        [P in keyof T & keyof AggregateCareerPath]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareerPath[P]>
      : GetScalarType<T[P], AggregateCareerPath[P]>
  }




  export type CareerPathGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerPathWhereInput
    orderBy?: CareerPathOrderByWithAggregationInput | CareerPathOrderByWithAggregationInput[]
    by: CareerPathScalarFieldEnum[] | CareerPathScalarFieldEnum
    having?: CareerPathScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerPathCountAggregateInputType | true
    _avg?: CareerPathAvgAggregateInputType
    _sum?: CareerPathSumAggregateInputType
    _min?: CareerPathMinAggregateInputType
    _max?: CareerPathMaxAggregateInputType
  }

  export type CareerPathGroupByOutputType = {
    id: string
    title: string
    description: string | null
    category: string | null
    avgSalary: Decimal | null
    growthRate: Decimal | null
    difficulty: string | null
    matchScore: number | null
    salary: string | null
    growth: string | null
    demand: string | null
    requiredSkills: string | null
    createdAt: Date
    updatedAt: Date
    _count: CareerPathCountAggregateOutputType | null
    _avg: CareerPathAvgAggregateOutputType | null
    _sum: CareerPathSumAggregateOutputType | null
    _min: CareerPathMinAggregateOutputType | null
    _max: CareerPathMaxAggregateOutputType | null
  }

  type GetCareerPathGroupByPayload<T extends CareerPathGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerPathGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerPathGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerPathGroupByOutputType[P]>
            : GetScalarType<T[P], CareerPathGroupByOutputType[P]>
        }
      >
    >


  export type CareerPathSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    avgSalary?: boolean
    growthRate?: boolean
    difficulty?: boolean
    matchScore?: boolean
    salary?: boolean
    growth?: boolean
    demand?: boolean
    requiredSkills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roadmaps?: boolean | CareerPath$roadmapsArgs<ExtArgs>
    _count?: boolean | CareerPathCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careerPath"]>

  export type CareerPathSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    avgSalary?: boolean
    growthRate?: boolean
    difficulty?: boolean
    matchScore?: boolean
    salary?: boolean
    growth?: boolean
    demand?: boolean
    requiredSkills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CareerPathInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roadmaps?: boolean | CareerPath$roadmapsArgs<ExtArgs>
    _count?: boolean | CareerPathCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CareerPathPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CareerPath"
    objects: {
      roadmaps: Prisma.$RoadmapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      category: string | null
      avgSalary: Prisma.Decimal | null
      growthRate: Prisma.Decimal | null
      difficulty: string | null
      matchScore: number | null
      salary: string | null
      growth: string | null
      demand: string | null
      requiredSkills: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["careerPath"]>
    composites: {}
  }


  type CareerPathGetPayload<S extends boolean | null | undefined | CareerPathDefaultArgs> = $Result.GetResult<Prisma.$CareerPathPayload, S>

  type CareerPathCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CareerPathFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CareerPathCountAggregateInputType | true
    }

  export interface CareerPathDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CareerPath'], meta: { name: 'CareerPath' } }
    /**
     * Find zero or one CareerPath that matches the filter.
     * @param {CareerPathFindUniqueArgs} args - Arguments to find a CareerPath
     * @example
     * // Get one CareerPath
     * const careerPath = await prisma.careerPath.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CareerPathFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CareerPathFindUniqueArgs<ExtArgs>>
    ): Prisma__CareerPathClient<$Result.GetResult<Prisma.$CareerPathPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CareerPath that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CareerPathFindUniqueOrThrowArgs} args - Arguments to find a CareerPath
     * @example
     * // Get one CareerPath
     * const careerPath = await prisma.careerPath.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CareerPathFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CareerPathFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CareerPathClient<$Result.GetResult<Prisma.$CareerPathPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CareerPath that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerPathFindFirstArgs} args - Arguments to find a CareerPath
     * @example
     * // Get one CareerPath
     * const careerPath = await prisma.careerPath.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CareerPathFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CareerPathFindFirstArgs<ExtArgs>>
    ): Prisma__CareerPathClient<$Result.GetResult<Prisma.$CareerPathPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CareerPath that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerPathFindFirstOrThrowArgs} args - Arguments to find a CareerPath
     * @example
     * // Get one CareerPath
     * const careerPath = await prisma.careerPath.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CareerPathFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CareerPathFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CareerPathClient<$Result.GetResult<Prisma.$CareerPathPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CareerPaths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerPathFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CareerPaths
     * const careerPaths = await prisma.careerPath.findMany()
     * 
     * // Get first 10 CareerPaths
     * const careerPaths = await prisma.careerPath.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careerPathWithIdOnly = await prisma.careerPath.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CareerPathFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CareerPathFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPathPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CareerPath.
     * @param {CareerPathCreateArgs} args - Arguments to create a CareerPath.
     * @example
     * // Create one CareerPath
     * const CareerPath = await prisma.careerPath.create({
     *   data: {
     *     // ... data to create a CareerPath
     *   }
     * })
     * 
    **/
    create<T extends CareerPathCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CareerPathCreateArgs<ExtArgs>>
    ): Prisma__CareerPathClient<$Result.GetResult<Prisma.$CareerPathPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a CareerPath.
     * @param {CareerPathDeleteArgs} args - Arguments to delete one CareerPath.
     * @example
     * // Delete one CareerPath
     * const CareerPath = await prisma.careerPath.delete({
     *   where: {
     *     // ... filter to delete one CareerPath
     *   }
     * })
     * 
    **/
    delete<T extends CareerPathDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CareerPathDeleteArgs<ExtArgs>>
    ): Prisma__CareerPathClient<$Result.GetResult<Prisma.$CareerPathPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CareerPath.
     * @param {CareerPathUpdateArgs} args - Arguments to update one CareerPath.
     * @example
     * // Update one CareerPath
     * const careerPath = await prisma.careerPath.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CareerPathUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CareerPathUpdateArgs<ExtArgs>>
    ): Prisma__CareerPathClient<$Result.GetResult<Prisma.$CareerPathPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CareerPaths.
     * @param {CareerPathDeleteManyArgs} args - Arguments to filter CareerPaths to delete.
     * @example
     * // Delete a few CareerPaths
     * const { count } = await prisma.careerPath.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CareerPathDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CareerPathDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareerPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerPathUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CareerPaths
     * const careerPath = await prisma.careerPath.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CareerPathUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CareerPathUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CareerPath.
     * @param {CareerPathUpsertArgs} args - Arguments to update or create a CareerPath.
     * @example
     * // Update or create a CareerPath
     * const careerPath = await prisma.careerPath.upsert({
     *   create: {
     *     // ... data to create a CareerPath
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CareerPath we want to update
     *   }
     * })
    **/
    upsert<T extends CareerPathUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CareerPathUpsertArgs<ExtArgs>>
    ): Prisma__CareerPathClient<$Result.GetResult<Prisma.$CareerPathPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CareerPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerPathCountArgs} args - Arguments to filter CareerPaths to count.
     * @example
     * // Count the number of CareerPaths
     * const count = await prisma.careerPath.count({
     *   where: {
     *     // ... the filter for the CareerPaths we want to count
     *   }
     * })
    **/
    count<T extends CareerPathCountArgs>(
      args?: Subset<T, CareerPathCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerPathCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CareerPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerPathAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CareerPathAggregateArgs>(args: Subset<T, CareerPathAggregateArgs>): Prisma.PrismaPromise<GetCareerPathAggregateType<T>>

    /**
     * Group by CareerPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerPathGroupByArgs} args - Group by arguments.
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
      T extends CareerPathGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerPathGroupByArgs['orderBy'] }
        : { orderBy?: CareerPathGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CareerPathGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerPathGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CareerPath model
   */
  readonly fields: CareerPathFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CareerPath.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerPathClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roadmaps<T extends CareerPath$roadmapsArgs<ExtArgs> = {}>(args?: Subset<T, CareerPath$roadmapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CareerPath model
   */ 
  interface CareerPathFieldRefs {
    readonly id: FieldRef<"CareerPath", 'String'>
    readonly title: FieldRef<"CareerPath", 'String'>
    readonly description: FieldRef<"CareerPath", 'String'>
    readonly category: FieldRef<"CareerPath", 'String'>
    readonly avgSalary: FieldRef<"CareerPath", 'Decimal'>
    readonly growthRate: FieldRef<"CareerPath", 'Decimal'>
    readonly difficulty: FieldRef<"CareerPath", 'String'>
    readonly matchScore: FieldRef<"CareerPath", 'Int'>
    readonly salary: FieldRef<"CareerPath", 'String'>
    readonly growth: FieldRef<"CareerPath", 'String'>
    readonly demand: FieldRef<"CareerPath", 'String'>
    readonly requiredSkills: FieldRef<"CareerPath", 'String'>
    readonly createdAt: FieldRef<"CareerPath", 'DateTime'>
    readonly updatedAt: FieldRef<"CareerPath", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CareerPath findUnique
   */
  export type CareerPathFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerPath
     */
    select?: CareerPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerPathInclude<ExtArgs> | null
    /**
     * Filter, which CareerPath to fetch.
     */
    where: CareerPathWhereUniqueInput
  }


  /**
   * CareerPath findUniqueOrThrow
   */
  export type CareerPathFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerPath
     */
    select?: CareerPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerPathInclude<ExtArgs> | null
    /**
     * Filter, which CareerPath to fetch.
     */
    where: CareerPathWhereUniqueInput
  }


  /**
   * CareerPath findFirst
   */
  export type CareerPathFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerPath
     */
    select?: CareerPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerPathInclude<ExtArgs> | null
    /**
     * Filter, which CareerPath to fetch.
     */
    where?: CareerPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerPaths to fetch.
     */
    orderBy?: CareerPathOrderByWithRelationInput | CareerPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareerPaths.
     */
    cursor?: CareerPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareerPaths.
     */
    distinct?: CareerPathScalarFieldEnum | CareerPathScalarFieldEnum[]
  }


  /**
   * CareerPath findFirstOrThrow
   */
  export type CareerPathFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerPath
     */
    select?: CareerPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerPathInclude<ExtArgs> | null
    /**
     * Filter, which CareerPath to fetch.
     */
    where?: CareerPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerPaths to fetch.
     */
    orderBy?: CareerPathOrderByWithRelationInput | CareerPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareerPaths.
     */
    cursor?: CareerPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareerPaths.
     */
    distinct?: CareerPathScalarFieldEnum | CareerPathScalarFieldEnum[]
  }


  /**
   * CareerPath findMany
   */
  export type CareerPathFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerPath
     */
    select?: CareerPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerPathInclude<ExtArgs> | null
    /**
     * Filter, which CareerPaths to fetch.
     */
    where?: CareerPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerPaths to fetch.
     */
    orderBy?: CareerPathOrderByWithRelationInput | CareerPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CareerPaths.
     */
    cursor?: CareerPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerPaths.
     */
    skip?: number
    distinct?: CareerPathScalarFieldEnum | CareerPathScalarFieldEnum[]
  }


  /**
   * CareerPath create
   */
  export type CareerPathCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerPath
     */
    select?: CareerPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerPathInclude<ExtArgs> | null
    /**
     * The data needed to create a CareerPath.
     */
    data: XOR<CareerPathCreateInput, CareerPathUncheckedCreateInput>
  }


  /**
   * CareerPath update
   */
  export type CareerPathUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerPath
     */
    select?: CareerPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerPathInclude<ExtArgs> | null
    /**
     * The data needed to update a CareerPath.
     */
    data: XOR<CareerPathUpdateInput, CareerPathUncheckedUpdateInput>
    /**
     * Choose, which CareerPath to update.
     */
    where: CareerPathWhereUniqueInput
  }


  /**
   * CareerPath updateMany
   */
  export type CareerPathUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CareerPaths.
     */
    data: XOR<CareerPathUpdateManyMutationInput, CareerPathUncheckedUpdateManyInput>
    /**
     * Filter which CareerPaths to update
     */
    where?: CareerPathWhereInput
  }


  /**
   * CareerPath upsert
   */
  export type CareerPathUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerPath
     */
    select?: CareerPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerPathInclude<ExtArgs> | null
    /**
     * The filter to search for the CareerPath to update in case it exists.
     */
    where: CareerPathWhereUniqueInput
    /**
     * In case the CareerPath found by the `where` argument doesn't exist, create a new CareerPath with this data.
     */
    create: XOR<CareerPathCreateInput, CareerPathUncheckedCreateInput>
    /**
     * In case the CareerPath was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerPathUpdateInput, CareerPathUncheckedUpdateInput>
  }


  /**
   * CareerPath delete
   */
  export type CareerPathDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerPath
     */
    select?: CareerPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerPathInclude<ExtArgs> | null
    /**
     * Filter which CareerPath to delete.
     */
    where: CareerPathWhereUniqueInput
  }


  /**
   * CareerPath deleteMany
   */
  export type CareerPathDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareerPaths to delete
     */
    where?: CareerPathWhereInput
  }


  /**
   * CareerPath.roadmaps
   */
  export type CareerPath$roadmapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapInclude<ExtArgs> | null
    where?: RoadmapWhereInput
    orderBy?: RoadmapOrderByWithRelationInput | RoadmapOrderByWithRelationInput[]
    cursor?: RoadmapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoadmapScalarFieldEnum | RoadmapScalarFieldEnum[]
  }


  /**
   * CareerPath without action
   */
  export type CareerPathDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerPath
     */
    select?: CareerPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareerPathInclude<ExtArgs> | null
  }



  /**
   * Model Roadmap
   */

  export type AggregateRoadmap = {
    _count: RoadmapCountAggregateOutputType | null
    _min: RoadmapMinAggregateOutputType | null
    _max: RoadmapMaxAggregateOutputType | null
  }

  export type RoadmapMinAggregateOutputType = {
    id: string | null
    careerPathId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoadmapMaxAggregateOutputType = {
    id: string | null
    careerPathId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoadmapCountAggregateOutputType = {
    id: number
    careerPathId: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoadmapMinAggregateInputType = {
    id?: true
    careerPathId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoadmapMaxAggregateInputType = {
    id?: true
    careerPathId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoadmapCountAggregateInputType = {
    id?: true
    careerPathId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoadmapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roadmap to aggregate.
     */
    where?: RoadmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roadmaps to fetch.
     */
    orderBy?: RoadmapOrderByWithRelationInput | RoadmapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoadmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roadmaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roadmaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roadmaps
    **/
    _count?: true | RoadmapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoadmapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoadmapMaxAggregateInputType
  }

  export type GetRoadmapAggregateType<T extends RoadmapAggregateArgs> = {
        [P in keyof T & keyof AggregateRoadmap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoadmap[P]>
      : GetScalarType<T[P], AggregateRoadmap[P]>
  }




  export type RoadmapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadmapWhereInput
    orderBy?: RoadmapOrderByWithAggregationInput | RoadmapOrderByWithAggregationInput[]
    by: RoadmapScalarFieldEnum[] | RoadmapScalarFieldEnum
    having?: RoadmapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoadmapCountAggregateInputType | true
    _min?: RoadmapMinAggregateInputType
    _max?: RoadmapMaxAggregateInputType
  }

  export type RoadmapGroupByOutputType = {
    id: string
    careerPathId: string
    title: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoadmapCountAggregateOutputType | null
    _min: RoadmapMinAggregateOutputType | null
    _max: RoadmapMaxAggregateOutputType | null
  }

  type GetRoadmapGroupByPayload<T extends RoadmapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoadmapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoadmapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoadmapGroupByOutputType[P]>
            : GetScalarType<T[P], RoadmapGroupByOutputType[P]>
        }
      >
    >


  export type RoadmapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    careerPathId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    careerPath?: boolean | CareerPathDefaultArgs<ExtArgs>
    items?: boolean | Roadmap$itemsArgs<ExtArgs>
    _count?: boolean | RoadmapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmap"]>

  export type RoadmapSelectScalar = {
    id?: boolean
    careerPathId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoadmapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careerPath?: boolean | CareerPathDefaultArgs<ExtArgs>
    items?: boolean | Roadmap$itemsArgs<ExtArgs>
    _count?: boolean | RoadmapCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RoadmapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roadmap"
    objects: {
      careerPath: Prisma.$CareerPathPayload<ExtArgs>
      items: Prisma.$RoadmapItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      careerPathId: string
      title: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roadmap"]>
    composites: {}
  }


  type RoadmapGetPayload<S extends boolean | null | undefined | RoadmapDefaultArgs> = $Result.GetResult<Prisma.$RoadmapPayload, S>

  type RoadmapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoadmapFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoadmapCountAggregateInputType | true
    }

  export interface RoadmapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roadmap'], meta: { name: 'Roadmap' } }
    /**
     * Find zero or one Roadmap that matches the filter.
     * @param {RoadmapFindUniqueArgs} args - Arguments to find a Roadmap
     * @example
     * // Get one Roadmap
     * const roadmap = await prisma.roadmap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoadmapFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoadmapFindUniqueArgs<ExtArgs>>
    ): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Roadmap that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoadmapFindUniqueOrThrowArgs} args - Arguments to find a Roadmap
     * @example
     * // Get one Roadmap
     * const roadmap = await prisma.roadmap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoadmapFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoadmapFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Roadmap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapFindFirstArgs} args - Arguments to find a Roadmap
     * @example
     * // Get one Roadmap
     * const roadmap = await prisma.roadmap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoadmapFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoadmapFindFirstArgs<ExtArgs>>
    ): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Roadmap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapFindFirstOrThrowArgs} args - Arguments to find a Roadmap
     * @example
     * // Get one Roadmap
     * const roadmap = await prisma.roadmap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoadmapFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoadmapFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roadmaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roadmaps
     * const roadmaps = await prisma.roadmap.findMany()
     * 
     * // Get first 10 Roadmaps
     * const roadmaps = await prisma.roadmap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roadmapWithIdOnly = await prisma.roadmap.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoadmapFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoadmapFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Roadmap.
     * @param {RoadmapCreateArgs} args - Arguments to create a Roadmap.
     * @example
     * // Create one Roadmap
     * const Roadmap = await prisma.roadmap.create({
     *   data: {
     *     // ... data to create a Roadmap
     *   }
     * })
     * 
    **/
    create<T extends RoadmapCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoadmapCreateArgs<ExtArgs>>
    ): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Roadmap.
     * @param {RoadmapDeleteArgs} args - Arguments to delete one Roadmap.
     * @example
     * // Delete one Roadmap
     * const Roadmap = await prisma.roadmap.delete({
     *   where: {
     *     // ... filter to delete one Roadmap
     *   }
     * })
     * 
    **/
    delete<T extends RoadmapDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoadmapDeleteArgs<ExtArgs>>
    ): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Roadmap.
     * @param {RoadmapUpdateArgs} args - Arguments to update one Roadmap.
     * @example
     * // Update one Roadmap
     * const roadmap = await prisma.roadmap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoadmapUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoadmapUpdateArgs<ExtArgs>>
    ): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roadmaps.
     * @param {RoadmapDeleteManyArgs} args - Arguments to filter Roadmaps to delete.
     * @example
     * // Delete a few Roadmaps
     * const { count } = await prisma.roadmap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoadmapDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoadmapDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roadmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roadmaps
     * const roadmap = await prisma.roadmap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoadmapUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoadmapUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roadmap.
     * @param {RoadmapUpsertArgs} args - Arguments to update or create a Roadmap.
     * @example
     * // Update or create a Roadmap
     * const roadmap = await prisma.roadmap.upsert({
     *   create: {
     *     // ... data to create a Roadmap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roadmap we want to update
     *   }
     * })
    **/
    upsert<T extends RoadmapUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoadmapUpsertArgs<ExtArgs>>
    ): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roadmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapCountArgs} args - Arguments to filter Roadmaps to count.
     * @example
     * // Count the number of Roadmaps
     * const count = await prisma.roadmap.count({
     *   where: {
     *     // ... the filter for the Roadmaps we want to count
     *   }
     * })
    **/
    count<T extends RoadmapCountArgs>(
      args?: Subset<T, RoadmapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoadmapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roadmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoadmapAggregateArgs>(args: Subset<T, RoadmapAggregateArgs>): Prisma.PrismaPromise<GetRoadmapAggregateType<T>>

    /**
     * Group by Roadmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapGroupByArgs} args - Group by arguments.
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
      T extends RoadmapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoadmapGroupByArgs['orderBy'] }
        : { orderBy?: RoadmapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoadmapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoadmapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roadmap model
   */
  readonly fields: RoadmapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roadmap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoadmapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    careerPath<T extends CareerPathDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerPathDefaultArgs<ExtArgs>>): Prisma__CareerPathClient<$Result.GetResult<Prisma.$CareerPathPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    items<T extends Roadmap$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Roadmap$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Roadmap model
   */ 
  interface RoadmapFieldRefs {
    readonly id: FieldRef<"Roadmap", 'String'>
    readonly careerPathId: FieldRef<"Roadmap", 'String'>
    readonly title: FieldRef<"Roadmap", 'String'>
    readonly description: FieldRef<"Roadmap", 'String'>
    readonly createdAt: FieldRef<"Roadmap", 'DateTime'>
    readonly updatedAt: FieldRef<"Roadmap", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Roadmap findUnique
   */
  export type RoadmapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * Filter, which Roadmap to fetch.
     */
    where: RoadmapWhereUniqueInput
  }


  /**
   * Roadmap findUniqueOrThrow
   */
  export type RoadmapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * Filter, which Roadmap to fetch.
     */
    where: RoadmapWhereUniqueInput
  }


  /**
   * Roadmap findFirst
   */
  export type RoadmapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * Filter, which Roadmap to fetch.
     */
    where?: RoadmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roadmaps to fetch.
     */
    orderBy?: RoadmapOrderByWithRelationInput | RoadmapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roadmaps.
     */
    cursor?: RoadmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roadmaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roadmaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roadmaps.
     */
    distinct?: RoadmapScalarFieldEnum | RoadmapScalarFieldEnum[]
  }


  /**
   * Roadmap findFirstOrThrow
   */
  export type RoadmapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * Filter, which Roadmap to fetch.
     */
    where?: RoadmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roadmaps to fetch.
     */
    orderBy?: RoadmapOrderByWithRelationInput | RoadmapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roadmaps.
     */
    cursor?: RoadmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roadmaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roadmaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roadmaps.
     */
    distinct?: RoadmapScalarFieldEnum | RoadmapScalarFieldEnum[]
  }


  /**
   * Roadmap findMany
   */
  export type RoadmapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * Filter, which Roadmaps to fetch.
     */
    where?: RoadmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roadmaps to fetch.
     */
    orderBy?: RoadmapOrderByWithRelationInput | RoadmapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roadmaps.
     */
    cursor?: RoadmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roadmaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roadmaps.
     */
    skip?: number
    distinct?: RoadmapScalarFieldEnum | RoadmapScalarFieldEnum[]
  }


  /**
   * Roadmap create
   */
  export type RoadmapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * The data needed to create a Roadmap.
     */
    data: XOR<RoadmapCreateInput, RoadmapUncheckedCreateInput>
  }


  /**
   * Roadmap update
   */
  export type RoadmapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * The data needed to update a Roadmap.
     */
    data: XOR<RoadmapUpdateInput, RoadmapUncheckedUpdateInput>
    /**
     * Choose, which Roadmap to update.
     */
    where: RoadmapWhereUniqueInput
  }


  /**
   * Roadmap updateMany
   */
  export type RoadmapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roadmaps.
     */
    data: XOR<RoadmapUpdateManyMutationInput, RoadmapUncheckedUpdateManyInput>
    /**
     * Filter which Roadmaps to update
     */
    where?: RoadmapWhereInput
  }


  /**
   * Roadmap upsert
   */
  export type RoadmapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * The filter to search for the Roadmap to update in case it exists.
     */
    where: RoadmapWhereUniqueInput
    /**
     * In case the Roadmap found by the `where` argument doesn't exist, create a new Roadmap with this data.
     */
    create: XOR<RoadmapCreateInput, RoadmapUncheckedCreateInput>
    /**
     * In case the Roadmap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoadmapUpdateInput, RoadmapUncheckedUpdateInput>
  }


  /**
   * Roadmap delete
   */
  export type RoadmapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * Filter which Roadmap to delete.
     */
    where: RoadmapWhereUniqueInput
  }


  /**
   * Roadmap deleteMany
   */
  export type RoadmapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roadmaps to delete
     */
    where?: RoadmapWhereInput
  }


  /**
   * Roadmap.items
   */
  export type Roadmap$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    where?: RoadmapItemWhereInput
    orderBy?: RoadmapItemOrderByWithRelationInput | RoadmapItemOrderByWithRelationInput[]
    cursor?: RoadmapItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoadmapItemScalarFieldEnum | RoadmapItemScalarFieldEnum[]
  }


  /**
   * Roadmap without action
   */
  export type RoadmapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapInclude<ExtArgs> | null
  }



  /**
   * Model RoadmapItem
   */

  export type AggregateRoadmapItem = {
    _count: RoadmapItemCountAggregateOutputType | null
    _avg: RoadmapItemAvgAggregateOutputType | null
    _sum: RoadmapItemSumAggregateOutputType | null
    _min: RoadmapItemMinAggregateOutputType | null
    _max: RoadmapItemMaxAggregateOutputType | null
  }

  export type RoadmapItemAvgAggregateOutputType = {
    order: number | null
  }

  export type RoadmapItemSumAggregateOutputType = {
    order: number | null
  }

  export type RoadmapItemMinAggregateOutputType = {
    id: string | null
    roadmapId: string | null
    title: string | null
    description: string | null
    status: string | null
    duration: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoadmapItemMaxAggregateOutputType = {
    id: string | null
    roadmapId: string | null
    title: string | null
    description: string | null
    status: string | null
    duration: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoadmapItemCountAggregateOutputType = {
    id: number
    roadmapId: number
    title: number
    description: number
    status: number
    duration: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoadmapItemAvgAggregateInputType = {
    order?: true
  }

  export type RoadmapItemSumAggregateInputType = {
    order?: true
  }

  export type RoadmapItemMinAggregateInputType = {
    id?: true
    roadmapId?: true
    title?: true
    description?: true
    status?: true
    duration?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoadmapItemMaxAggregateInputType = {
    id?: true
    roadmapId?: true
    title?: true
    description?: true
    status?: true
    duration?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoadmapItemCountAggregateInputType = {
    id?: true
    roadmapId?: true
    title?: true
    description?: true
    status?: true
    duration?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoadmapItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoadmapItem to aggregate.
     */
    where?: RoadmapItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapItems to fetch.
     */
    orderBy?: RoadmapItemOrderByWithRelationInput | RoadmapItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoadmapItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoadmapItems
    **/
    _count?: true | RoadmapItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoadmapItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoadmapItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoadmapItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoadmapItemMaxAggregateInputType
  }

  export type GetRoadmapItemAggregateType<T extends RoadmapItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRoadmapItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoadmapItem[P]>
      : GetScalarType<T[P], AggregateRoadmapItem[P]>
  }




  export type RoadmapItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadmapItemWhereInput
    orderBy?: RoadmapItemOrderByWithAggregationInput | RoadmapItemOrderByWithAggregationInput[]
    by: RoadmapItemScalarFieldEnum[] | RoadmapItemScalarFieldEnum
    having?: RoadmapItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoadmapItemCountAggregateInputType | true
    _avg?: RoadmapItemAvgAggregateInputType
    _sum?: RoadmapItemSumAggregateInputType
    _min?: RoadmapItemMinAggregateInputType
    _max?: RoadmapItemMaxAggregateInputType
  }

  export type RoadmapItemGroupByOutputType = {
    id: string
    roadmapId: string
    title: string
    description: string | null
    status: string
    duration: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: RoadmapItemCountAggregateOutputType | null
    _avg: RoadmapItemAvgAggregateOutputType | null
    _sum: RoadmapItemSumAggregateOutputType | null
    _min: RoadmapItemMinAggregateOutputType | null
    _max: RoadmapItemMaxAggregateOutputType | null
  }

  type GetRoadmapItemGroupByPayload<T extends RoadmapItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoadmapItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoadmapItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoadmapItemGroupByOutputType[P]>
            : GetScalarType<T[P], RoadmapItemGroupByOutputType[P]>
        }
      >
    >


  export type RoadmapItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roadmapId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    duration?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roadmap?: boolean | RoadmapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmapItem"]>

  export type RoadmapItemSelectScalar = {
    id?: boolean
    roadmapId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    duration?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoadmapItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roadmap?: boolean | RoadmapDefaultArgs<ExtArgs>
  }


  export type $RoadmapItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoadmapItem"
    objects: {
      roadmap: Prisma.$RoadmapPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roadmapId: string
      title: string
      description: string | null
      status: string
      duration: string | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roadmapItem"]>
    composites: {}
  }


  type RoadmapItemGetPayload<S extends boolean | null | undefined | RoadmapItemDefaultArgs> = $Result.GetResult<Prisma.$RoadmapItemPayload, S>

  type RoadmapItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoadmapItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoadmapItemCountAggregateInputType | true
    }

  export interface RoadmapItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoadmapItem'], meta: { name: 'RoadmapItem' } }
    /**
     * Find zero or one RoadmapItem that matches the filter.
     * @param {RoadmapItemFindUniqueArgs} args - Arguments to find a RoadmapItem
     * @example
     * // Get one RoadmapItem
     * const roadmapItem = await prisma.roadmapItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoadmapItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoadmapItemFindUniqueArgs<ExtArgs>>
    ): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RoadmapItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoadmapItemFindUniqueOrThrowArgs} args - Arguments to find a RoadmapItem
     * @example
     * // Get one RoadmapItem
     * const roadmapItem = await prisma.roadmapItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoadmapItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoadmapItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RoadmapItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemFindFirstArgs} args - Arguments to find a RoadmapItem
     * @example
     * // Get one RoadmapItem
     * const roadmapItem = await prisma.roadmapItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoadmapItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoadmapItemFindFirstArgs<ExtArgs>>
    ): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RoadmapItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemFindFirstOrThrowArgs} args - Arguments to find a RoadmapItem
     * @example
     * // Get one RoadmapItem
     * const roadmapItem = await prisma.roadmapItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoadmapItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoadmapItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RoadmapItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoadmapItems
     * const roadmapItems = await prisma.roadmapItem.findMany()
     * 
     * // Get first 10 RoadmapItems
     * const roadmapItems = await prisma.roadmapItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roadmapItemWithIdOnly = await prisma.roadmapItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoadmapItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoadmapItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RoadmapItem.
     * @param {RoadmapItemCreateArgs} args - Arguments to create a RoadmapItem.
     * @example
     * // Create one RoadmapItem
     * const RoadmapItem = await prisma.roadmapItem.create({
     *   data: {
     *     // ... data to create a RoadmapItem
     *   }
     * })
     * 
    **/
    create<T extends RoadmapItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoadmapItemCreateArgs<ExtArgs>>
    ): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a RoadmapItem.
     * @param {RoadmapItemDeleteArgs} args - Arguments to delete one RoadmapItem.
     * @example
     * // Delete one RoadmapItem
     * const RoadmapItem = await prisma.roadmapItem.delete({
     *   where: {
     *     // ... filter to delete one RoadmapItem
     *   }
     * })
     * 
    **/
    delete<T extends RoadmapItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoadmapItemDeleteArgs<ExtArgs>>
    ): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RoadmapItem.
     * @param {RoadmapItemUpdateArgs} args - Arguments to update one RoadmapItem.
     * @example
     * // Update one RoadmapItem
     * const roadmapItem = await prisma.roadmapItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoadmapItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoadmapItemUpdateArgs<ExtArgs>>
    ): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RoadmapItems.
     * @param {RoadmapItemDeleteManyArgs} args - Arguments to filter RoadmapItems to delete.
     * @example
     * // Delete a few RoadmapItems
     * const { count } = await prisma.roadmapItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoadmapItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoadmapItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoadmapItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoadmapItems
     * const roadmapItem = await prisma.roadmapItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoadmapItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoadmapItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoadmapItem.
     * @param {RoadmapItemUpsertArgs} args - Arguments to update or create a RoadmapItem.
     * @example
     * // Update or create a RoadmapItem
     * const roadmapItem = await prisma.roadmapItem.upsert({
     *   create: {
     *     // ... data to create a RoadmapItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoadmapItem we want to update
     *   }
     * })
    **/
    upsert<T extends RoadmapItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoadmapItemUpsertArgs<ExtArgs>>
    ): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RoadmapItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemCountArgs} args - Arguments to filter RoadmapItems to count.
     * @example
     * // Count the number of RoadmapItems
     * const count = await prisma.roadmapItem.count({
     *   where: {
     *     // ... the filter for the RoadmapItems we want to count
     *   }
     * })
    **/
    count<T extends RoadmapItemCountArgs>(
      args?: Subset<T, RoadmapItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoadmapItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoadmapItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoadmapItemAggregateArgs>(args: Subset<T, RoadmapItemAggregateArgs>): Prisma.PrismaPromise<GetRoadmapItemAggregateType<T>>

    /**
     * Group by RoadmapItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemGroupByArgs} args - Group by arguments.
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
      T extends RoadmapItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoadmapItemGroupByArgs['orderBy'] }
        : { orderBy?: RoadmapItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoadmapItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoadmapItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoadmapItem model
   */
  readonly fields: RoadmapItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoadmapItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoadmapItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roadmap<T extends RoadmapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoadmapDefaultArgs<ExtArgs>>): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RoadmapItem model
   */ 
  interface RoadmapItemFieldRefs {
    readonly id: FieldRef<"RoadmapItem", 'String'>
    readonly roadmapId: FieldRef<"RoadmapItem", 'String'>
    readonly title: FieldRef<"RoadmapItem", 'String'>
    readonly description: FieldRef<"RoadmapItem", 'String'>
    readonly status: FieldRef<"RoadmapItem", 'String'>
    readonly duration: FieldRef<"RoadmapItem", 'String'>
    readonly order: FieldRef<"RoadmapItem", 'Int'>
    readonly createdAt: FieldRef<"RoadmapItem", 'DateTime'>
    readonly updatedAt: FieldRef<"RoadmapItem", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * RoadmapItem findUnique
   */
  export type RoadmapItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapItem to fetch.
     */
    where: RoadmapItemWhereUniqueInput
  }


  /**
   * RoadmapItem findUniqueOrThrow
   */
  export type RoadmapItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapItem to fetch.
     */
    where: RoadmapItemWhereUniqueInput
  }


  /**
   * RoadmapItem findFirst
   */
  export type RoadmapItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapItem to fetch.
     */
    where?: RoadmapItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapItems to fetch.
     */
    orderBy?: RoadmapItemOrderByWithRelationInput | RoadmapItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoadmapItems.
     */
    cursor?: RoadmapItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadmapItems.
     */
    distinct?: RoadmapItemScalarFieldEnum | RoadmapItemScalarFieldEnum[]
  }


  /**
   * RoadmapItem findFirstOrThrow
   */
  export type RoadmapItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapItem to fetch.
     */
    where?: RoadmapItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapItems to fetch.
     */
    orderBy?: RoadmapItemOrderByWithRelationInput | RoadmapItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoadmapItems.
     */
    cursor?: RoadmapItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadmapItems.
     */
    distinct?: RoadmapItemScalarFieldEnum | RoadmapItemScalarFieldEnum[]
  }


  /**
   * RoadmapItem findMany
   */
  export type RoadmapItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapItems to fetch.
     */
    where?: RoadmapItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapItems to fetch.
     */
    orderBy?: RoadmapItemOrderByWithRelationInput | RoadmapItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoadmapItems.
     */
    cursor?: RoadmapItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapItems.
     */
    skip?: number
    distinct?: RoadmapItemScalarFieldEnum | RoadmapItemScalarFieldEnum[]
  }


  /**
   * RoadmapItem create
   */
  export type RoadmapItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RoadmapItem.
     */
    data: XOR<RoadmapItemCreateInput, RoadmapItemUncheckedCreateInput>
  }


  /**
   * RoadmapItem update
   */
  export type RoadmapItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RoadmapItem.
     */
    data: XOR<RoadmapItemUpdateInput, RoadmapItemUncheckedUpdateInput>
    /**
     * Choose, which RoadmapItem to update.
     */
    where: RoadmapItemWhereUniqueInput
  }


  /**
   * RoadmapItem updateMany
   */
  export type RoadmapItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoadmapItems.
     */
    data: XOR<RoadmapItemUpdateManyMutationInput, RoadmapItemUncheckedUpdateManyInput>
    /**
     * Filter which RoadmapItems to update
     */
    where?: RoadmapItemWhereInput
  }


  /**
   * RoadmapItem upsert
   */
  export type RoadmapItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RoadmapItem to update in case it exists.
     */
    where: RoadmapItemWhereUniqueInput
    /**
     * In case the RoadmapItem found by the `where` argument doesn't exist, create a new RoadmapItem with this data.
     */
    create: XOR<RoadmapItemCreateInput, RoadmapItemUncheckedCreateInput>
    /**
     * In case the RoadmapItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoadmapItemUpdateInput, RoadmapItemUncheckedUpdateInput>
  }


  /**
   * RoadmapItem delete
   */
  export type RoadmapItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * Filter which RoadmapItem to delete.
     */
    where: RoadmapItemWhereUniqueInput
  }


  /**
   * RoadmapItem deleteMany
   */
  export type RoadmapItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoadmapItems to delete
     */
    where?: RoadmapItemWhereInput
  }


  /**
   * RoadmapItem without action
   */
  export type RoadmapItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoadmapItemInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CareerPathScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    avgSalary: 'avgSalary',
    growthRate: 'growthRate',
    difficulty: 'difficulty',
    matchScore: 'matchScore',
    salary: 'salary',
    growth: 'growth',
    demand: 'demand',
    requiredSkills: 'requiredSkills',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CareerPathScalarFieldEnum = (typeof CareerPathScalarFieldEnum)[keyof typeof CareerPathScalarFieldEnum]


  export const RoadmapScalarFieldEnum: {
    id: 'id',
    careerPathId: 'careerPathId',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoadmapScalarFieldEnum = (typeof RoadmapScalarFieldEnum)[keyof typeof RoadmapScalarFieldEnum]


  export const RoadmapItemScalarFieldEnum: {
    id: 'id',
    roadmapId: 'roadmapId',
    title: 'title',
    description: 'description',
    status: 'status',
    duration: 'duration',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoadmapItemScalarFieldEnum = (typeof RoadmapItemScalarFieldEnum)[keyof typeof RoadmapItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CareerPathWhereInput = {
    AND?: CareerPathWhereInput | CareerPathWhereInput[]
    OR?: CareerPathWhereInput[]
    NOT?: CareerPathWhereInput | CareerPathWhereInput[]
    id?: StringFilter<"CareerPath"> | string
    title?: StringFilter<"CareerPath"> | string
    description?: StringNullableFilter<"CareerPath"> | string | null
    category?: StringNullableFilter<"CareerPath"> | string | null
    avgSalary?: DecimalNullableFilter<"CareerPath"> | Decimal | DecimalJsLike | number | string | null
    growthRate?: DecimalNullableFilter<"CareerPath"> | Decimal | DecimalJsLike | number | string | null
    difficulty?: StringNullableFilter<"CareerPath"> | string | null
    matchScore?: IntNullableFilter<"CareerPath"> | number | null
    salary?: StringNullableFilter<"CareerPath"> | string | null
    growth?: StringNullableFilter<"CareerPath"> | string | null
    demand?: StringNullableFilter<"CareerPath"> | string | null
    requiredSkills?: StringNullableFilter<"CareerPath"> | string | null
    createdAt?: DateTimeFilter<"CareerPath"> | Date | string
    updatedAt?: DateTimeFilter<"CareerPath"> | Date | string
    roadmaps?: RoadmapListRelationFilter
  }

  export type CareerPathOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    avgSalary?: SortOrderInput | SortOrder
    growthRate?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    matchScore?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    growth?: SortOrderInput | SortOrder
    demand?: SortOrderInput | SortOrder
    requiredSkills?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roadmaps?: RoadmapOrderByRelationAggregateInput
  }

  export type CareerPathWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CareerPathWhereInput | CareerPathWhereInput[]
    OR?: CareerPathWhereInput[]
    NOT?: CareerPathWhereInput | CareerPathWhereInput[]
    title?: StringFilter<"CareerPath"> | string
    description?: StringNullableFilter<"CareerPath"> | string | null
    category?: StringNullableFilter<"CareerPath"> | string | null
    avgSalary?: DecimalNullableFilter<"CareerPath"> | Decimal | DecimalJsLike | number | string | null
    growthRate?: DecimalNullableFilter<"CareerPath"> | Decimal | DecimalJsLike | number | string | null
    difficulty?: StringNullableFilter<"CareerPath"> | string | null
    matchScore?: IntNullableFilter<"CareerPath"> | number | null
    salary?: StringNullableFilter<"CareerPath"> | string | null
    growth?: StringNullableFilter<"CareerPath"> | string | null
    demand?: StringNullableFilter<"CareerPath"> | string | null
    requiredSkills?: StringNullableFilter<"CareerPath"> | string | null
    createdAt?: DateTimeFilter<"CareerPath"> | Date | string
    updatedAt?: DateTimeFilter<"CareerPath"> | Date | string
    roadmaps?: RoadmapListRelationFilter
  }, "id">

  export type CareerPathOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    avgSalary?: SortOrderInput | SortOrder
    growthRate?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    matchScore?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    growth?: SortOrderInput | SortOrder
    demand?: SortOrderInput | SortOrder
    requiredSkills?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CareerPathCountOrderByAggregateInput
    _avg?: CareerPathAvgOrderByAggregateInput
    _max?: CareerPathMaxOrderByAggregateInput
    _min?: CareerPathMinOrderByAggregateInput
    _sum?: CareerPathSumOrderByAggregateInput
  }

  export type CareerPathScalarWhereWithAggregatesInput = {
    AND?: CareerPathScalarWhereWithAggregatesInput | CareerPathScalarWhereWithAggregatesInput[]
    OR?: CareerPathScalarWhereWithAggregatesInput[]
    NOT?: CareerPathScalarWhereWithAggregatesInput | CareerPathScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CareerPath"> | string
    title?: StringWithAggregatesFilter<"CareerPath"> | string
    description?: StringNullableWithAggregatesFilter<"CareerPath"> | string | null
    category?: StringNullableWithAggregatesFilter<"CareerPath"> | string | null
    avgSalary?: DecimalNullableWithAggregatesFilter<"CareerPath"> | Decimal | DecimalJsLike | number | string | null
    growthRate?: DecimalNullableWithAggregatesFilter<"CareerPath"> | Decimal | DecimalJsLike | number | string | null
    difficulty?: StringNullableWithAggregatesFilter<"CareerPath"> | string | null
    matchScore?: IntNullableWithAggregatesFilter<"CareerPath"> | number | null
    salary?: StringNullableWithAggregatesFilter<"CareerPath"> | string | null
    growth?: StringNullableWithAggregatesFilter<"CareerPath"> | string | null
    demand?: StringNullableWithAggregatesFilter<"CareerPath"> | string | null
    requiredSkills?: StringNullableWithAggregatesFilter<"CareerPath"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CareerPath"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CareerPath"> | Date | string
  }

  export type RoadmapWhereInput = {
    AND?: RoadmapWhereInput | RoadmapWhereInput[]
    OR?: RoadmapWhereInput[]
    NOT?: RoadmapWhereInput | RoadmapWhereInput[]
    id?: StringFilter<"Roadmap"> | string
    careerPathId?: StringFilter<"Roadmap"> | string
    title?: StringFilter<"Roadmap"> | string
    description?: StringNullableFilter<"Roadmap"> | string | null
    createdAt?: DateTimeFilter<"Roadmap"> | Date | string
    updatedAt?: DateTimeFilter<"Roadmap"> | Date | string
    careerPath?: XOR<CareerPathRelationFilter, CareerPathWhereInput>
    items?: RoadmapItemListRelationFilter
  }

  export type RoadmapOrderByWithRelationInput = {
    id?: SortOrder
    careerPathId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    careerPath?: CareerPathOrderByWithRelationInput
    items?: RoadmapItemOrderByRelationAggregateInput
  }

  export type RoadmapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoadmapWhereInput | RoadmapWhereInput[]
    OR?: RoadmapWhereInput[]
    NOT?: RoadmapWhereInput | RoadmapWhereInput[]
    careerPathId?: StringFilter<"Roadmap"> | string
    title?: StringFilter<"Roadmap"> | string
    description?: StringNullableFilter<"Roadmap"> | string | null
    createdAt?: DateTimeFilter<"Roadmap"> | Date | string
    updatedAt?: DateTimeFilter<"Roadmap"> | Date | string
    careerPath?: XOR<CareerPathRelationFilter, CareerPathWhereInput>
    items?: RoadmapItemListRelationFilter
  }, "id">

  export type RoadmapOrderByWithAggregationInput = {
    id?: SortOrder
    careerPathId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoadmapCountOrderByAggregateInput
    _max?: RoadmapMaxOrderByAggregateInput
    _min?: RoadmapMinOrderByAggregateInput
  }

  export type RoadmapScalarWhereWithAggregatesInput = {
    AND?: RoadmapScalarWhereWithAggregatesInput | RoadmapScalarWhereWithAggregatesInput[]
    OR?: RoadmapScalarWhereWithAggregatesInput[]
    NOT?: RoadmapScalarWhereWithAggregatesInput | RoadmapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Roadmap"> | string
    careerPathId?: StringWithAggregatesFilter<"Roadmap"> | string
    title?: StringWithAggregatesFilter<"Roadmap"> | string
    description?: StringNullableWithAggregatesFilter<"Roadmap"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Roadmap"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Roadmap"> | Date | string
  }

  export type RoadmapItemWhereInput = {
    AND?: RoadmapItemWhereInput | RoadmapItemWhereInput[]
    OR?: RoadmapItemWhereInput[]
    NOT?: RoadmapItemWhereInput | RoadmapItemWhereInput[]
    id?: StringFilter<"RoadmapItem"> | string
    roadmapId?: StringFilter<"RoadmapItem"> | string
    title?: StringFilter<"RoadmapItem"> | string
    description?: StringNullableFilter<"RoadmapItem"> | string | null
    status?: StringFilter<"RoadmapItem"> | string
    duration?: StringNullableFilter<"RoadmapItem"> | string | null
    order?: IntFilter<"RoadmapItem"> | number
    createdAt?: DateTimeFilter<"RoadmapItem"> | Date | string
    updatedAt?: DateTimeFilter<"RoadmapItem"> | Date | string
    roadmap?: XOR<RoadmapRelationFilter, RoadmapWhereInput>
  }

  export type RoadmapItemOrderByWithRelationInput = {
    id?: SortOrder
    roadmapId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roadmap?: RoadmapOrderByWithRelationInput
  }

  export type RoadmapItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoadmapItemWhereInput | RoadmapItemWhereInput[]
    OR?: RoadmapItemWhereInput[]
    NOT?: RoadmapItemWhereInput | RoadmapItemWhereInput[]
    roadmapId?: StringFilter<"RoadmapItem"> | string
    title?: StringFilter<"RoadmapItem"> | string
    description?: StringNullableFilter<"RoadmapItem"> | string | null
    status?: StringFilter<"RoadmapItem"> | string
    duration?: StringNullableFilter<"RoadmapItem"> | string | null
    order?: IntFilter<"RoadmapItem"> | number
    createdAt?: DateTimeFilter<"RoadmapItem"> | Date | string
    updatedAt?: DateTimeFilter<"RoadmapItem"> | Date | string
    roadmap?: XOR<RoadmapRelationFilter, RoadmapWhereInput>
  }, "id">

  export type RoadmapItemOrderByWithAggregationInput = {
    id?: SortOrder
    roadmapId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoadmapItemCountOrderByAggregateInput
    _avg?: RoadmapItemAvgOrderByAggregateInput
    _max?: RoadmapItemMaxOrderByAggregateInput
    _min?: RoadmapItemMinOrderByAggregateInput
    _sum?: RoadmapItemSumOrderByAggregateInput
  }

  export type RoadmapItemScalarWhereWithAggregatesInput = {
    AND?: RoadmapItemScalarWhereWithAggregatesInput | RoadmapItemScalarWhereWithAggregatesInput[]
    OR?: RoadmapItemScalarWhereWithAggregatesInput[]
    NOT?: RoadmapItemScalarWhereWithAggregatesInput | RoadmapItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoadmapItem"> | string
    roadmapId?: StringWithAggregatesFilter<"RoadmapItem"> | string
    title?: StringWithAggregatesFilter<"RoadmapItem"> | string
    description?: StringNullableWithAggregatesFilter<"RoadmapItem"> | string | null
    status?: StringWithAggregatesFilter<"RoadmapItem"> | string
    duration?: StringNullableWithAggregatesFilter<"RoadmapItem"> | string | null
    order?: IntWithAggregatesFilter<"RoadmapItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RoadmapItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoadmapItem"> | Date | string
  }

  export type CareerPathCreateInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    avgSalary?: Decimal | DecimalJsLike | number | string | null
    growthRate?: Decimal | DecimalJsLike | number | string | null
    difficulty?: string | null
    matchScore?: number | null
    salary?: string | null
    growth?: string | null
    demand?: string | null
    requiredSkills?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roadmaps?: RoadmapCreateNestedManyWithoutCareerPathInput
  }

  export type CareerPathUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    avgSalary?: Decimal | DecimalJsLike | number | string | null
    growthRate?: Decimal | DecimalJsLike | number | string | null
    difficulty?: string | null
    matchScore?: number | null
    salary?: string | null
    growth?: string | null
    demand?: string | null
    requiredSkills?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roadmaps?: RoadmapUncheckedCreateNestedManyWithoutCareerPathInput
  }

  export type CareerPathUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    avgSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    growthRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableIntFieldUpdateOperationsInput | number | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    growth?: NullableStringFieldUpdateOperationsInput | string | null
    demand?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roadmaps?: RoadmapUpdateManyWithoutCareerPathNestedInput
  }

  export type CareerPathUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    avgSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    growthRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableIntFieldUpdateOperationsInput | number | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    growth?: NullableStringFieldUpdateOperationsInput | string | null
    demand?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roadmaps?: RoadmapUncheckedUpdateManyWithoutCareerPathNestedInput
  }

  export type CareerPathUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    avgSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    growthRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableIntFieldUpdateOperationsInput | number | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    growth?: NullableStringFieldUpdateOperationsInput | string | null
    demand?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerPathUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    avgSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    growthRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableIntFieldUpdateOperationsInput | number | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    growth?: NullableStringFieldUpdateOperationsInput | string | null
    demand?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    careerPath: CareerPathCreateNestedOneWithoutRoadmapsInput
    items?: RoadmapItemCreateNestedManyWithoutRoadmapInput
  }

  export type RoadmapUncheckedCreateInput = {
    id?: string
    careerPathId: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RoadmapItemUncheckedCreateNestedManyWithoutRoadmapInput
  }

  export type RoadmapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerPath?: CareerPathUpdateOneRequiredWithoutRoadmapsNestedInput
    items?: RoadmapItemUpdateManyWithoutRoadmapNestedInput
  }

  export type RoadmapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    careerPathId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RoadmapItemUncheckedUpdateManyWithoutRoadmapNestedInput
  }

  export type RoadmapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    careerPathId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapItemCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    duration?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roadmap: RoadmapCreateNestedOneWithoutItemsInput
  }

  export type RoadmapItemUncheckedCreateInput = {
    id?: string
    roadmapId: string
    title: string
    description?: string | null
    status?: string
    duration?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoadmapItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roadmap?: RoadmapUpdateOneRequiredWithoutItemsNestedInput
  }

  export type RoadmapItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roadmapId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roadmapId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type RoadmapListRelationFilter = {
    every?: RoadmapWhereInput
    some?: RoadmapWhereInput
    none?: RoadmapWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoadmapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CareerPathCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    avgSalary?: SortOrder
    growthRate?: SortOrder
    difficulty?: SortOrder
    matchScore?: SortOrder
    salary?: SortOrder
    growth?: SortOrder
    demand?: SortOrder
    requiredSkills?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerPathAvgOrderByAggregateInput = {
    avgSalary?: SortOrder
    growthRate?: SortOrder
    matchScore?: SortOrder
  }

  export type CareerPathMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    avgSalary?: SortOrder
    growthRate?: SortOrder
    difficulty?: SortOrder
    matchScore?: SortOrder
    salary?: SortOrder
    growth?: SortOrder
    demand?: SortOrder
    requiredSkills?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerPathMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    avgSalary?: SortOrder
    growthRate?: SortOrder
    difficulty?: SortOrder
    matchScore?: SortOrder
    salary?: SortOrder
    growth?: SortOrder
    demand?: SortOrder
    requiredSkills?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerPathSumOrderByAggregateInput = {
    avgSalary?: SortOrder
    growthRate?: SortOrder
    matchScore?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type CareerPathRelationFilter = {
    is?: CareerPathWhereInput
    isNot?: CareerPathWhereInput
  }

  export type RoadmapItemListRelationFilter = {
    every?: RoadmapItemWhereInput
    some?: RoadmapItemWhereInput
    none?: RoadmapItemWhereInput
  }

  export type RoadmapItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoadmapCountOrderByAggregateInput = {
    id?: SortOrder
    careerPathId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoadmapMaxOrderByAggregateInput = {
    id?: SortOrder
    careerPathId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoadmapMinOrderByAggregateInput = {
    id?: SortOrder
    careerPathId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type RoadmapRelationFilter = {
    is?: RoadmapWhereInput
    isNot?: RoadmapWhereInput
  }

  export type RoadmapItemCountOrderByAggregateInput = {
    id?: SortOrder
    roadmapId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoadmapItemAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type RoadmapItemMaxOrderByAggregateInput = {
    id?: SortOrder
    roadmapId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoadmapItemMinOrderByAggregateInput = {
    id?: SortOrder
    roadmapId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoadmapItemSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type RoadmapCreateNestedManyWithoutCareerPathInput = {
    create?: XOR<RoadmapCreateWithoutCareerPathInput, RoadmapUncheckedCreateWithoutCareerPathInput> | RoadmapCreateWithoutCareerPathInput[] | RoadmapUncheckedCreateWithoutCareerPathInput[]
    connectOrCreate?: RoadmapCreateOrConnectWithoutCareerPathInput | RoadmapCreateOrConnectWithoutCareerPathInput[]
    connect?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
  }

  export type RoadmapUncheckedCreateNestedManyWithoutCareerPathInput = {
    create?: XOR<RoadmapCreateWithoutCareerPathInput, RoadmapUncheckedCreateWithoutCareerPathInput> | RoadmapCreateWithoutCareerPathInput[] | RoadmapUncheckedCreateWithoutCareerPathInput[]
    connectOrCreate?: RoadmapCreateOrConnectWithoutCareerPathInput | RoadmapCreateOrConnectWithoutCareerPathInput[]
    connect?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoadmapUpdateManyWithoutCareerPathNestedInput = {
    create?: XOR<RoadmapCreateWithoutCareerPathInput, RoadmapUncheckedCreateWithoutCareerPathInput> | RoadmapCreateWithoutCareerPathInput[] | RoadmapUncheckedCreateWithoutCareerPathInput[]
    connectOrCreate?: RoadmapCreateOrConnectWithoutCareerPathInput | RoadmapCreateOrConnectWithoutCareerPathInput[]
    upsert?: RoadmapUpsertWithWhereUniqueWithoutCareerPathInput | RoadmapUpsertWithWhereUniqueWithoutCareerPathInput[]
    set?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    disconnect?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    delete?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    connect?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    update?: RoadmapUpdateWithWhereUniqueWithoutCareerPathInput | RoadmapUpdateWithWhereUniqueWithoutCareerPathInput[]
    updateMany?: RoadmapUpdateManyWithWhereWithoutCareerPathInput | RoadmapUpdateManyWithWhereWithoutCareerPathInput[]
    deleteMany?: RoadmapScalarWhereInput | RoadmapScalarWhereInput[]
  }

  export type RoadmapUncheckedUpdateManyWithoutCareerPathNestedInput = {
    create?: XOR<RoadmapCreateWithoutCareerPathInput, RoadmapUncheckedCreateWithoutCareerPathInput> | RoadmapCreateWithoutCareerPathInput[] | RoadmapUncheckedCreateWithoutCareerPathInput[]
    connectOrCreate?: RoadmapCreateOrConnectWithoutCareerPathInput | RoadmapCreateOrConnectWithoutCareerPathInput[]
    upsert?: RoadmapUpsertWithWhereUniqueWithoutCareerPathInput | RoadmapUpsertWithWhereUniqueWithoutCareerPathInput[]
    set?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    disconnect?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    delete?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    connect?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    update?: RoadmapUpdateWithWhereUniqueWithoutCareerPathInput | RoadmapUpdateWithWhereUniqueWithoutCareerPathInput[]
    updateMany?: RoadmapUpdateManyWithWhereWithoutCareerPathInput | RoadmapUpdateManyWithWhereWithoutCareerPathInput[]
    deleteMany?: RoadmapScalarWhereInput | RoadmapScalarWhereInput[]
  }

  export type CareerPathCreateNestedOneWithoutRoadmapsInput = {
    create?: XOR<CareerPathCreateWithoutRoadmapsInput, CareerPathUncheckedCreateWithoutRoadmapsInput>
    connectOrCreate?: CareerPathCreateOrConnectWithoutRoadmapsInput
    connect?: CareerPathWhereUniqueInput
  }

  export type RoadmapItemCreateNestedManyWithoutRoadmapInput = {
    create?: XOR<RoadmapItemCreateWithoutRoadmapInput, RoadmapItemUncheckedCreateWithoutRoadmapInput> | RoadmapItemCreateWithoutRoadmapInput[] | RoadmapItemUncheckedCreateWithoutRoadmapInput[]
    connectOrCreate?: RoadmapItemCreateOrConnectWithoutRoadmapInput | RoadmapItemCreateOrConnectWithoutRoadmapInput[]
    connect?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
  }

  export type RoadmapItemUncheckedCreateNestedManyWithoutRoadmapInput = {
    create?: XOR<RoadmapItemCreateWithoutRoadmapInput, RoadmapItemUncheckedCreateWithoutRoadmapInput> | RoadmapItemCreateWithoutRoadmapInput[] | RoadmapItemUncheckedCreateWithoutRoadmapInput[]
    connectOrCreate?: RoadmapItemCreateOrConnectWithoutRoadmapInput | RoadmapItemCreateOrConnectWithoutRoadmapInput[]
    connect?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
  }

  export type CareerPathUpdateOneRequiredWithoutRoadmapsNestedInput = {
    create?: XOR<CareerPathCreateWithoutRoadmapsInput, CareerPathUncheckedCreateWithoutRoadmapsInput>
    connectOrCreate?: CareerPathCreateOrConnectWithoutRoadmapsInput
    upsert?: CareerPathUpsertWithoutRoadmapsInput
    connect?: CareerPathWhereUniqueInput
    update?: XOR<XOR<CareerPathUpdateToOneWithWhereWithoutRoadmapsInput, CareerPathUpdateWithoutRoadmapsInput>, CareerPathUncheckedUpdateWithoutRoadmapsInput>
  }

  export type RoadmapItemUpdateManyWithoutRoadmapNestedInput = {
    create?: XOR<RoadmapItemCreateWithoutRoadmapInput, RoadmapItemUncheckedCreateWithoutRoadmapInput> | RoadmapItemCreateWithoutRoadmapInput[] | RoadmapItemUncheckedCreateWithoutRoadmapInput[]
    connectOrCreate?: RoadmapItemCreateOrConnectWithoutRoadmapInput | RoadmapItemCreateOrConnectWithoutRoadmapInput[]
    upsert?: RoadmapItemUpsertWithWhereUniqueWithoutRoadmapInput | RoadmapItemUpsertWithWhereUniqueWithoutRoadmapInput[]
    set?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    disconnect?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    delete?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    connect?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    update?: RoadmapItemUpdateWithWhereUniqueWithoutRoadmapInput | RoadmapItemUpdateWithWhereUniqueWithoutRoadmapInput[]
    updateMany?: RoadmapItemUpdateManyWithWhereWithoutRoadmapInput | RoadmapItemUpdateManyWithWhereWithoutRoadmapInput[]
    deleteMany?: RoadmapItemScalarWhereInput | RoadmapItemScalarWhereInput[]
  }

  export type RoadmapItemUncheckedUpdateManyWithoutRoadmapNestedInput = {
    create?: XOR<RoadmapItemCreateWithoutRoadmapInput, RoadmapItemUncheckedCreateWithoutRoadmapInput> | RoadmapItemCreateWithoutRoadmapInput[] | RoadmapItemUncheckedCreateWithoutRoadmapInput[]
    connectOrCreate?: RoadmapItemCreateOrConnectWithoutRoadmapInput | RoadmapItemCreateOrConnectWithoutRoadmapInput[]
    upsert?: RoadmapItemUpsertWithWhereUniqueWithoutRoadmapInput | RoadmapItemUpsertWithWhereUniqueWithoutRoadmapInput[]
    set?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    disconnect?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    delete?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    connect?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    update?: RoadmapItemUpdateWithWhereUniqueWithoutRoadmapInput | RoadmapItemUpdateWithWhereUniqueWithoutRoadmapInput[]
    updateMany?: RoadmapItemUpdateManyWithWhereWithoutRoadmapInput | RoadmapItemUpdateManyWithWhereWithoutRoadmapInput[]
    deleteMany?: RoadmapItemScalarWhereInput | RoadmapItemScalarWhereInput[]
  }

  export type RoadmapCreateNestedOneWithoutItemsInput = {
    create?: XOR<RoadmapCreateWithoutItemsInput, RoadmapUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RoadmapCreateOrConnectWithoutItemsInput
    connect?: RoadmapWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoadmapUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<RoadmapCreateWithoutItemsInput, RoadmapUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RoadmapCreateOrConnectWithoutItemsInput
    upsert?: RoadmapUpsertWithoutItemsInput
    connect?: RoadmapWhereUniqueInput
    update?: XOR<XOR<RoadmapUpdateToOneWithWhereWithoutItemsInput, RoadmapUpdateWithoutItemsInput>, RoadmapUncheckedUpdateWithoutItemsInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type RoadmapCreateWithoutCareerPathInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RoadmapItemCreateNestedManyWithoutRoadmapInput
  }

  export type RoadmapUncheckedCreateWithoutCareerPathInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RoadmapItemUncheckedCreateNestedManyWithoutRoadmapInput
  }

  export type RoadmapCreateOrConnectWithoutCareerPathInput = {
    where: RoadmapWhereUniqueInput
    create: XOR<RoadmapCreateWithoutCareerPathInput, RoadmapUncheckedCreateWithoutCareerPathInput>
  }

  export type RoadmapUpsertWithWhereUniqueWithoutCareerPathInput = {
    where: RoadmapWhereUniqueInput
    update: XOR<RoadmapUpdateWithoutCareerPathInput, RoadmapUncheckedUpdateWithoutCareerPathInput>
    create: XOR<RoadmapCreateWithoutCareerPathInput, RoadmapUncheckedCreateWithoutCareerPathInput>
  }

  export type RoadmapUpdateWithWhereUniqueWithoutCareerPathInput = {
    where: RoadmapWhereUniqueInput
    data: XOR<RoadmapUpdateWithoutCareerPathInput, RoadmapUncheckedUpdateWithoutCareerPathInput>
  }

  export type RoadmapUpdateManyWithWhereWithoutCareerPathInput = {
    where: RoadmapScalarWhereInput
    data: XOR<RoadmapUpdateManyMutationInput, RoadmapUncheckedUpdateManyWithoutCareerPathInput>
  }

  export type RoadmapScalarWhereInput = {
    AND?: RoadmapScalarWhereInput | RoadmapScalarWhereInput[]
    OR?: RoadmapScalarWhereInput[]
    NOT?: RoadmapScalarWhereInput | RoadmapScalarWhereInput[]
    id?: StringFilter<"Roadmap"> | string
    careerPathId?: StringFilter<"Roadmap"> | string
    title?: StringFilter<"Roadmap"> | string
    description?: StringNullableFilter<"Roadmap"> | string | null
    createdAt?: DateTimeFilter<"Roadmap"> | Date | string
    updatedAt?: DateTimeFilter<"Roadmap"> | Date | string
  }

  export type CareerPathCreateWithoutRoadmapsInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    avgSalary?: Decimal | DecimalJsLike | number | string | null
    growthRate?: Decimal | DecimalJsLike | number | string | null
    difficulty?: string | null
    matchScore?: number | null
    salary?: string | null
    growth?: string | null
    demand?: string | null
    requiredSkills?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerPathUncheckedCreateWithoutRoadmapsInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    avgSalary?: Decimal | DecimalJsLike | number | string | null
    growthRate?: Decimal | DecimalJsLike | number | string | null
    difficulty?: string | null
    matchScore?: number | null
    salary?: string | null
    growth?: string | null
    demand?: string | null
    requiredSkills?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerPathCreateOrConnectWithoutRoadmapsInput = {
    where: CareerPathWhereUniqueInput
    create: XOR<CareerPathCreateWithoutRoadmapsInput, CareerPathUncheckedCreateWithoutRoadmapsInput>
  }

  export type RoadmapItemCreateWithoutRoadmapInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    duration?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoadmapItemUncheckedCreateWithoutRoadmapInput = {
    id?: string
    title: string
    description?: string | null
    status?: string
    duration?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoadmapItemCreateOrConnectWithoutRoadmapInput = {
    where: RoadmapItemWhereUniqueInput
    create: XOR<RoadmapItemCreateWithoutRoadmapInput, RoadmapItemUncheckedCreateWithoutRoadmapInput>
  }

  export type CareerPathUpsertWithoutRoadmapsInput = {
    update: XOR<CareerPathUpdateWithoutRoadmapsInput, CareerPathUncheckedUpdateWithoutRoadmapsInput>
    create: XOR<CareerPathCreateWithoutRoadmapsInput, CareerPathUncheckedCreateWithoutRoadmapsInput>
    where?: CareerPathWhereInput
  }

  export type CareerPathUpdateToOneWithWhereWithoutRoadmapsInput = {
    where?: CareerPathWhereInput
    data: XOR<CareerPathUpdateWithoutRoadmapsInput, CareerPathUncheckedUpdateWithoutRoadmapsInput>
  }

  export type CareerPathUpdateWithoutRoadmapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    avgSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    growthRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableIntFieldUpdateOperationsInput | number | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    growth?: NullableStringFieldUpdateOperationsInput | string | null
    demand?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerPathUncheckedUpdateWithoutRoadmapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    avgSalary?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    growthRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    matchScore?: NullableIntFieldUpdateOperationsInput | number | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    growth?: NullableStringFieldUpdateOperationsInput | string | null
    demand?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapItemUpsertWithWhereUniqueWithoutRoadmapInput = {
    where: RoadmapItemWhereUniqueInput
    update: XOR<RoadmapItemUpdateWithoutRoadmapInput, RoadmapItemUncheckedUpdateWithoutRoadmapInput>
    create: XOR<RoadmapItemCreateWithoutRoadmapInput, RoadmapItemUncheckedCreateWithoutRoadmapInput>
  }

  export type RoadmapItemUpdateWithWhereUniqueWithoutRoadmapInput = {
    where: RoadmapItemWhereUniqueInput
    data: XOR<RoadmapItemUpdateWithoutRoadmapInput, RoadmapItemUncheckedUpdateWithoutRoadmapInput>
  }

  export type RoadmapItemUpdateManyWithWhereWithoutRoadmapInput = {
    where: RoadmapItemScalarWhereInput
    data: XOR<RoadmapItemUpdateManyMutationInput, RoadmapItemUncheckedUpdateManyWithoutRoadmapInput>
  }

  export type RoadmapItemScalarWhereInput = {
    AND?: RoadmapItemScalarWhereInput | RoadmapItemScalarWhereInput[]
    OR?: RoadmapItemScalarWhereInput[]
    NOT?: RoadmapItemScalarWhereInput | RoadmapItemScalarWhereInput[]
    id?: StringFilter<"RoadmapItem"> | string
    roadmapId?: StringFilter<"RoadmapItem"> | string
    title?: StringFilter<"RoadmapItem"> | string
    description?: StringNullableFilter<"RoadmapItem"> | string | null
    status?: StringFilter<"RoadmapItem"> | string
    duration?: StringNullableFilter<"RoadmapItem"> | string | null
    order?: IntFilter<"RoadmapItem"> | number
    createdAt?: DateTimeFilter<"RoadmapItem"> | Date | string
    updatedAt?: DateTimeFilter<"RoadmapItem"> | Date | string
  }

  export type RoadmapCreateWithoutItemsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    careerPath: CareerPathCreateNestedOneWithoutRoadmapsInput
  }

  export type RoadmapUncheckedCreateWithoutItemsInput = {
    id?: string
    careerPathId: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoadmapCreateOrConnectWithoutItemsInput = {
    where: RoadmapWhereUniqueInput
    create: XOR<RoadmapCreateWithoutItemsInput, RoadmapUncheckedCreateWithoutItemsInput>
  }

  export type RoadmapUpsertWithoutItemsInput = {
    update: XOR<RoadmapUpdateWithoutItemsInput, RoadmapUncheckedUpdateWithoutItemsInput>
    create: XOR<RoadmapCreateWithoutItemsInput, RoadmapUncheckedCreateWithoutItemsInput>
    where?: RoadmapWhereInput
  }

  export type RoadmapUpdateToOneWithWhereWithoutItemsInput = {
    where?: RoadmapWhereInput
    data: XOR<RoadmapUpdateWithoutItemsInput, RoadmapUncheckedUpdateWithoutItemsInput>
  }

  export type RoadmapUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careerPath?: CareerPathUpdateOneRequiredWithoutRoadmapsNestedInput
  }

  export type RoadmapUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    careerPathId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapUpdateWithoutCareerPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RoadmapItemUpdateManyWithoutRoadmapNestedInput
  }

  export type RoadmapUncheckedUpdateWithoutCareerPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RoadmapItemUncheckedUpdateManyWithoutRoadmapNestedInput
  }

  export type RoadmapUncheckedUpdateManyWithoutCareerPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapItemUpdateWithoutRoadmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapItemUncheckedUpdateWithoutRoadmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapItemUncheckedUpdateManyWithoutRoadmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CareerPathCountOutputTypeDefaultArgs instead
     */
    export type CareerPathCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CareerPathCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoadmapCountOutputTypeDefaultArgs instead
     */
    export type RoadmapCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoadmapCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CareerPathDefaultArgs instead
     */
    export type CareerPathArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CareerPathDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoadmapDefaultArgs instead
     */
    export type RoadmapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoadmapDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoadmapItemDefaultArgs instead
     */
    export type RoadmapItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoadmapItemDefaultArgs<ExtArgs>

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