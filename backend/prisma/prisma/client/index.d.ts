
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Machine
 * 
 */
export type Machine = $Result.DefaultSelection<Prisma.$MachinePayload>
/**
 * Model Queue
 * 
 */
export type Queue = $Result.DefaultSelection<Prisma.$QueuePayload>
/**
 * Model WashHistory
 * 
 */
export type WashHistory = $Result.DefaultSelection<Prisma.$WashHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const MachineStatus: {
  LIVRE: 'LIVRE',
  EM_USO: 'EM_USO'
};

export type MachineStatus = (typeof MachineStatus)[keyof typeof MachineStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type MachineStatus = $Enums.MachineStatus

export const MachineStatus: typeof $Enums.MachineStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

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
   * `prisma.machine`: Exposes CRUD operations for the **Machine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Machines
    * const machines = await prisma.machine.findMany()
    * ```
    */
  get machine(): Prisma.MachineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.queue`: Exposes CRUD operations for the **Queue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Queues
    * const queues = await prisma.queue.findMany()
    * ```
    */
  get queue(): Prisma.QueueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.washHistory`: Exposes CRUD operations for the **WashHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WashHistories
    * const washHistories = await prisma.washHistory.findMany()
    * ```
    */
  get washHistory(): Prisma.WashHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Machine: 'Machine',
    Queue: 'Queue',
    WashHistory: 'WashHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "machine" | "queue" | "washHistory"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Machine: {
        payload: Prisma.$MachinePayload<ExtArgs>
        fields: Prisma.MachineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MachineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MachineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          findFirst: {
            args: Prisma.MachineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MachineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          findMany: {
            args: Prisma.MachineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>[]
          }
          create: {
            args: Prisma.MachineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          createMany: {
            args: Prisma.MachineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MachineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          update: {
            args: Prisma.MachineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          deleteMany: {
            args: Prisma.MachineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MachineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MachineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachinePayload>
          }
          aggregate: {
            args: Prisma.MachineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMachine>
          }
          groupBy: {
            args: Prisma.MachineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MachineGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MachineFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MachineAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MachineCountArgs<ExtArgs>
            result: $Utils.Optional<MachineCountAggregateOutputType> | number
          }
        }
      }
      Queue: {
        payload: Prisma.$QueuePayload<ExtArgs>
        fields: Prisma.QueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>
          }
          findFirst: {
            args: Prisma.QueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>
          }
          findMany: {
            args: Prisma.QueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>[]
          }
          create: {
            args: Prisma.QueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>
          }
          createMany: {
            args: Prisma.QueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>
          }
          update: {
            args: Prisma.QueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>
          }
          deleteMany: {
            args: Prisma.QueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>
          }
          aggregate: {
            args: Prisma.QueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQueue>
          }
          groupBy: {
            args: Prisma.QueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueueGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.QueueFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.QueueAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.QueueCountArgs<ExtArgs>
            result: $Utils.Optional<QueueCountAggregateOutputType> | number
          }
        }
      }
      WashHistory: {
        payload: Prisma.$WashHistoryPayload<ExtArgs>
        fields: Prisma.WashHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WashHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WashHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WashHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WashHistoryPayload>
          }
          findFirst: {
            args: Prisma.WashHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WashHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WashHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WashHistoryPayload>
          }
          findMany: {
            args: Prisma.WashHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WashHistoryPayload>[]
          }
          create: {
            args: Prisma.WashHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WashHistoryPayload>
          }
          createMany: {
            args: Prisma.WashHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WashHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WashHistoryPayload>
          }
          update: {
            args: Prisma.WashHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WashHistoryPayload>
          }
          deleteMany: {
            args: Prisma.WashHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WashHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WashHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WashHistoryPayload>
          }
          aggregate: {
            args: Prisma.WashHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWashHistory>
          }
          groupBy: {
            args: Prisma.WashHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WashHistoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WashHistoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.WashHistoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.WashHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<WashHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    }
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    machine?: MachineOmit
    queue?: QueueOmit
    washHistory?: WashHistoryOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    machines: number
    queue: number
    washHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machines?: boolean | UserCountOutputTypeCountMachinesArgs
    queue?: boolean | UserCountOutputTypeCountQueueArgs
    washHistory?: boolean | UserCountOutputTypeCountWashHistoryArgs
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
  export type UserCountOutputTypeCountMachinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueueWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWashHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WashHistoryWhereInput
  }


  /**
   * Count Type MachineCountOutputType
   */

  export type MachineCountOutputType = {
    washHistory: number
  }

  export type MachineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    washHistory?: boolean | MachineCountOutputTypeCountWashHistoryArgs
  }

  // Custom InputTypes
  /**
   * MachineCountOutputType without action
   */
  export type MachineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineCountOutputType
     */
    select?: MachineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MachineCountOutputType without action
   */
  export type MachineCountOutputTypeCountWashHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WashHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phoneNumber: number
    password: number
    role: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    role?: true
    createdAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    role?: true
    createdAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    role?: true
    createdAt?: true
    updateAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updateAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
    machines?: boolean | User$machinesArgs<ExtArgs>
    queue?: boolean | User$queueArgs<ExtArgs>
    washHistory?: boolean | User$washHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phoneNumber" | "password" | "role" | "createdAt" | "updateAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machines?: boolean | User$machinesArgs<ExtArgs>
    queue?: boolean | User$queueArgs<ExtArgs>
    washHistory?: boolean | User$washHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      machines: Prisma.$MachinePayload<ExtArgs>[]
      queue: Prisma.$QueuePayload<ExtArgs>[]
      washHistory: Prisma.$WashHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phoneNumber: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updateAt: Date
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    machines<T extends User$machinesArgs<ExtArgs> = {}>(args?: Subset<T, User$machinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    queue<T extends User$queueArgs<ExtArgs> = {}>(args?: Subset<T, User$queueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    washHistory<T extends User$washHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$washHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WashHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.machines
   */
  export type User$machinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    where?: MachineWhereInput
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    cursor?: MachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
  }

  /**
   * User.queue
   */
  export type User$queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    where?: QueueWhereInput
    orderBy?: QueueOrderByWithRelationInput | QueueOrderByWithRelationInput[]
    cursor?: QueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueueScalarFieldEnum | QueueScalarFieldEnum[]
  }

  /**
   * User.washHistory
   */
  export type User$washHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WashHistory
     */
    select?: WashHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WashHistory
     */
    omit?: WashHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WashHistoryInclude<ExtArgs> | null
    where?: WashHistoryWhereInput
    orderBy?: WashHistoryOrderByWithRelationInput | WashHistoryOrderByWithRelationInput[]
    cursor?: WashHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WashHistoryScalarFieldEnum | WashHistoryScalarFieldEnum[]
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
   * Model Machine
   */

  export type AggregateMachine = {
    _count: MachineCountAggregateOutputType | null
    _min: MachineMinAggregateOutputType | null
    _max: MachineMaxAggregateOutputType | null
  }

  export type MachineMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.MachineStatus | null
    userId: string | null
    startedAt: Date | null
    estimatedEnd: Date | null
    updatedAt: Date | null
  }

  export type MachineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.MachineStatus | null
    userId: string | null
    startedAt: Date | null
    estimatedEnd: Date | null
    updatedAt: Date | null
  }

  export type MachineCountAggregateOutputType = {
    id: number
    name: number
    status: number
    userId: number
    startedAt: number
    estimatedEnd: number
    updatedAt: number
    _all: number
  }


  export type MachineMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    userId?: true
    startedAt?: true
    estimatedEnd?: true
    updatedAt?: true
  }

  export type MachineMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    userId?: true
    startedAt?: true
    estimatedEnd?: true
    updatedAt?: true
  }

  export type MachineCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    userId?: true
    startedAt?: true
    estimatedEnd?: true
    updatedAt?: true
    _all?: true
  }

  export type MachineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Machine to aggregate.
     */
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     */
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Machines
    **/
    _count?: true | MachineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MachineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MachineMaxAggregateInputType
  }

  export type GetMachineAggregateType<T extends MachineAggregateArgs> = {
        [P in keyof T & keyof AggregateMachine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMachine[P]>
      : GetScalarType<T[P], AggregateMachine[P]>
  }




  export type MachineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineWhereInput
    orderBy?: MachineOrderByWithAggregationInput | MachineOrderByWithAggregationInput[]
    by: MachineScalarFieldEnum[] | MachineScalarFieldEnum
    having?: MachineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MachineCountAggregateInputType | true
    _min?: MachineMinAggregateInputType
    _max?: MachineMaxAggregateInputType
  }

  export type MachineGroupByOutputType = {
    id: string
    name: string
    status: $Enums.MachineStatus
    userId: string | null
    startedAt: Date | null
    estimatedEnd: Date | null
    updatedAt: Date
    _count: MachineCountAggregateOutputType | null
    _min: MachineMinAggregateOutputType | null
    _max: MachineMaxAggregateOutputType | null
  }

  type GetMachineGroupByPayload<T extends MachineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MachineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MachineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MachineGroupByOutputType[P]>
            : GetScalarType<T[P], MachineGroupByOutputType[P]>
        }
      >
    >


  export type MachineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    userId?: boolean
    startedAt?: boolean
    estimatedEnd?: boolean
    updatedAt?: boolean
    user?: boolean | Machine$userArgs<ExtArgs>
    washHistory?: boolean | Machine$washHistoryArgs<ExtArgs>
    _count?: boolean | MachineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["machine"]>



  export type MachineSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    userId?: boolean
    startedAt?: boolean
    estimatedEnd?: boolean
    updatedAt?: boolean
  }

  export type MachineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "userId" | "startedAt" | "estimatedEnd" | "updatedAt", ExtArgs["result"]["machine"]>
  export type MachineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Machine$userArgs<ExtArgs>
    washHistory?: boolean | Machine$washHistoryArgs<ExtArgs>
    _count?: boolean | MachineCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MachinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Machine"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      washHistory: Prisma.$WashHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: $Enums.MachineStatus
      userId: string | null
      startedAt: Date | null
      estimatedEnd: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["machine"]>
    composites: {}
  }

  type MachineGetPayload<S extends boolean | null | undefined | MachineDefaultArgs> = $Result.GetResult<Prisma.$MachinePayload, S>

  type MachineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MachineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MachineCountAggregateInputType | true
    }

  export interface MachineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Machine'], meta: { name: 'Machine' } }
    /**
     * Find zero or one Machine that matches the filter.
     * @param {MachineFindUniqueArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MachineFindUniqueArgs>(args: SelectSubset<T, MachineFindUniqueArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Machine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MachineFindUniqueOrThrowArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MachineFindUniqueOrThrowArgs>(args: SelectSubset<T, MachineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Machine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineFindFirstArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MachineFindFirstArgs>(args?: SelectSubset<T, MachineFindFirstArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Machine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineFindFirstOrThrowArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MachineFindFirstOrThrowArgs>(args?: SelectSubset<T, MachineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Machines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Machines
     * const machines = await prisma.machine.findMany()
     * 
     * // Get first 10 Machines
     * const machines = await prisma.machine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const machineWithIdOnly = await prisma.machine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MachineFindManyArgs>(args?: SelectSubset<T, MachineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Machine.
     * @param {MachineCreateArgs} args - Arguments to create a Machine.
     * @example
     * // Create one Machine
     * const Machine = await prisma.machine.create({
     *   data: {
     *     // ... data to create a Machine
     *   }
     * })
     * 
     */
    create<T extends MachineCreateArgs>(args: SelectSubset<T, MachineCreateArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Machines.
     * @param {MachineCreateManyArgs} args - Arguments to create many Machines.
     * @example
     * // Create many Machines
     * const machine = await prisma.machine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MachineCreateManyArgs>(args?: SelectSubset<T, MachineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Machine.
     * @param {MachineDeleteArgs} args - Arguments to delete one Machine.
     * @example
     * // Delete one Machine
     * const Machine = await prisma.machine.delete({
     *   where: {
     *     // ... filter to delete one Machine
     *   }
     * })
     * 
     */
    delete<T extends MachineDeleteArgs>(args: SelectSubset<T, MachineDeleteArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Machine.
     * @param {MachineUpdateArgs} args - Arguments to update one Machine.
     * @example
     * // Update one Machine
     * const machine = await prisma.machine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MachineUpdateArgs>(args: SelectSubset<T, MachineUpdateArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Machines.
     * @param {MachineDeleteManyArgs} args - Arguments to filter Machines to delete.
     * @example
     * // Delete a few Machines
     * const { count } = await prisma.machine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MachineDeleteManyArgs>(args?: SelectSubset<T, MachineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Machines
     * const machine = await prisma.machine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MachineUpdateManyArgs>(args: SelectSubset<T, MachineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Machine.
     * @param {MachineUpsertArgs} args - Arguments to update or create a Machine.
     * @example
     * // Update or create a Machine
     * const machine = await prisma.machine.upsert({
     *   create: {
     *     // ... data to create a Machine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Machine we want to update
     *   }
     * })
     */
    upsert<T extends MachineUpsertArgs>(args: SelectSubset<T, MachineUpsertArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Machines that matches the filter.
     * @param {MachineFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const machine = await prisma.machine.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MachineFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Machine.
     * @param {MachineAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const machine = await prisma.machine.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MachineAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineCountArgs} args - Arguments to filter Machines to count.
     * @example
     * // Count the number of Machines
     * const count = await prisma.machine.count({
     *   where: {
     *     // ... the filter for the Machines we want to count
     *   }
     * })
    **/
    count<T extends MachineCountArgs>(
      args?: Subset<T, MachineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MachineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Machine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MachineAggregateArgs>(args: Subset<T, MachineAggregateArgs>): Prisma.PrismaPromise<GetMachineAggregateType<T>>

    /**
     * Group by Machine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineGroupByArgs} args - Group by arguments.
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
      T extends MachineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MachineGroupByArgs['orderBy'] }
        : { orderBy?: MachineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MachineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMachineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Machine model
   */
  readonly fields: MachineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Machine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MachineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Machine$userArgs<ExtArgs> = {}>(args?: Subset<T, Machine$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    washHistory<T extends Machine$washHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Machine$washHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WashHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Machine model
   */
  interface MachineFieldRefs {
    readonly id: FieldRef<"Machine", 'String'>
    readonly name: FieldRef<"Machine", 'String'>
    readonly status: FieldRef<"Machine", 'MachineStatus'>
    readonly userId: FieldRef<"Machine", 'String'>
    readonly startedAt: FieldRef<"Machine", 'DateTime'>
    readonly estimatedEnd: FieldRef<"Machine", 'DateTime'>
    readonly updatedAt: FieldRef<"Machine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Machine findUnique
   */
  export type MachineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machine to fetch.
     */
    where: MachineWhereUniqueInput
  }

  /**
   * Machine findUniqueOrThrow
   */
  export type MachineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machine to fetch.
     */
    where: MachineWhereUniqueInput
  }

  /**
   * Machine findFirst
   */
  export type MachineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machine to fetch.
     */
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     */
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Machines.
     */
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Machines.
     */
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
  }

  /**
   * Machine findFirstOrThrow
   */
  export type MachineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machine to fetch.
     */
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     */
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Machines.
     */
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Machines.
     */
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
  }

  /**
   * Machine findMany
   */
  export type MachineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter, which Machines to fetch.
     */
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     */
    orderBy?: MachineOrderByWithRelationInput | MachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Machines.
     */
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     */
    skip?: number
    distinct?: MachineScalarFieldEnum | MachineScalarFieldEnum[]
  }

  /**
   * Machine create
   */
  export type MachineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * The data needed to create a Machine.
     */
    data: XOR<MachineCreateInput, MachineUncheckedCreateInput>
  }

  /**
   * Machine createMany
   */
  export type MachineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Machines.
     */
    data: MachineCreateManyInput | MachineCreateManyInput[]
  }

  /**
   * Machine update
   */
  export type MachineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * The data needed to update a Machine.
     */
    data: XOR<MachineUpdateInput, MachineUncheckedUpdateInput>
    /**
     * Choose, which Machine to update.
     */
    where: MachineWhereUniqueInput
  }

  /**
   * Machine updateMany
   */
  export type MachineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Machines.
     */
    data: XOR<MachineUpdateManyMutationInput, MachineUncheckedUpdateManyInput>
    /**
     * Filter which Machines to update
     */
    where?: MachineWhereInput
    /**
     * Limit how many Machines to update.
     */
    limit?: number
  }

  /**
   * Machine upsert
   */
  export type MachineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * The filter to search for the Machine to update in case it exists.
     */
    where: MachineWhereUniqueInput
    /**
     * In case the Machine found by the `where` argument doesn't exist, create a new Machine with this data.
     */
    create: XOR<MachineCreateInput, MachineUncheckedCreateInput>
    /**
     * In case the Machine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MachineUpdateInput, MachineUncheckedUpdateInput>
  }

  /**
   * Machine delete
   */
  export type MachineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
    /**
     * Filter which Machine to delete.
     */
    where: MachineWhereUniqueInput
  }

  /**
   * Machine deleteMany
   */
  export type MachineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Machines to delete
     */
    where?: MachineWhereInput
    /**
     * Limit how many Machines to delete.
     */
    limit?: number
  }

  /**
   * Machine findRaw
   */
  export type MachineFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Machine aggregateRaw
   */
  export type MachineAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Machine.user
   */
  export type Machine$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Machine.washHistory
   */
  export type Machine$washHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WashHistory
     */
    select?: WashHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WashHistory
     */
    omit?: WashHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WashHistoryInclude<ExtArgs> | null
    where?: WashHistoryWhereInput
    orderBy?: WashHistoryOrderByWithRelationInput | WashHistoryOrderByWithRelationInput[]
    cursor?: WashHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WashHistoryScalarFieldEnum | WashHistoryScalarFieldEnum[]
  }

  /**
   * Machine without action
   */
  export type MachineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machine
     */
    select?: MachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Machine
     */
    omit?: MachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineInclude<ExtArgs> | null
  }


  /**
   * Model Queue
   */

  export type AggregateQueue = {
    _count: QueueCountAggregateOutputType | null
    _min: QueueMinAggregateOutputType | null
    _max: QueueMaxAggregateOutputType | null
  }

  export type QueueMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type QueueMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type QueueCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    _all: number
  }


  export type QueueMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
  }

  export type QueueMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
  }

  export type QueueCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type QueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Queue to aggregate.
     */
    where?: QueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queues to fetch.
     */
    orderBy?: QueueOrderByWithRelationInput | QueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Queues
    **/
    _count?: true | QueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueueMaxAggregateInputType
  }

  export type GetQueueAggregateType<T extends QueueAggregateArgs> = {
        [P in keyof T & keyof AggregateQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueue[P]>
      : GetScalarType<T[P], AggregateQueue[P]>
  }




  export type QueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueueWhereInput
    orderBy?: QueueOrderByWithAggregationInput | QueueOrderByWithAggregationInput[]
    by: QueueScalarFieldEnum[] | QueueScalarFieldEnum
    having?: QueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueueCountAggregateInputType | true
    _min?: QueueMinAggregateInputType
    _max?: QueueMaxAggregateInputType
  }

  export type QueueGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    _count: QueueCountAggregateOutputType | null
    _min: QueueMinAggregateOutputType | null
    _max: QueueMaxAggregateOutputType | null
  }

  type GetQueueGroupByPayload<T extends QueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueueGroupByOutputType[P]>
            : GetScalarType<T[P], QueueGroupByOutputType[P]>
        }
      >
    >


  export type QueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queue"]>



  export type QueueSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type QueueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt", ExtArgs["result"]["queue"]>
  export type QueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Queue"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["queue"]>
    composites: {}
  }

  type QueueGetPayload<S extends boolean | null | undefined | QueueDefaultArgs> = $Result.GetResult<Prisma.$QueuePayload, S>

  type QueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QueueCountAggregateInputType | true
    }

  export interface QueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Queue'], meta: { name: 'Queue' } }
    /**
     * Find zero or one Queue that matches the filter.
     * @param {QueueFindUniqueArgs} args - Arguments to find a Queue
     * @example
     * // Get one Queue
     * const queue = await prisma.queue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueueFindUniqueArgs>(args: SelectSubset<T, QueueFindUniqueArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Queue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QueueFindUniqueOrThrowArgs} args - Arguments to find a Queue
     * @example
     * // Get one Queue
     * const queue = await prisma.queue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueueFindUniqueOrThrowArgs>(args: SelectSubset<T, QueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Queue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueFindFirstArgs} args - Arguments to find a Queue
     * @example
     * // Get one Queue
     * const queue = await prisma.queue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueueFindFirstArgs>(args?: SelectSubset<T, QueueFindFirstArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Queue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueFindFirstOrThrowArgs} args - Arguments to find a Queue
     * @example
     * // Get one Queue
     * const queue = await prisma.queue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueueFindFirstOrThrowArgs>(args?: SelectSubset<T, QueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Queues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Queues
     * const queues = await prisma.queue.findMany()
     * 
     * // Get first 10 Queues
     * const queues = await prisma.queue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queueWithIdOnly = await prisma.queue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueueFindManyArgs>(args?: SelectSubset<T, QueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Queue.
     * @param {QueueCreateArgs} args - Arguments to create a Queue.
     * @example
     * // Create one Queue
     * const Queue = await prisma.queue.create({
     *   data: {
     *     // ... data to create a Queue
     *   }
     * })
     * 
     */
    create<T extends QueueCreateArgs>(args: SelectSubset<T, QueueCreateArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Queues.
     * @param {QueueCreateManyArgs} args - Arguments to create many Queues.
     * @example
     * // Create many Queues
     * const queue = await prisma.queue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueueCreateManyArgs>(args?: SelectSubset<T, QueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Queue.
     * @param {QueueDeleteArgs} args - Arguments to delete one Queue.
     * @example
     * // Delete one Queue
     * const Queue = await prisma.queue.delete({
     *   where: {
     *     // ... filter to delete one Queue
     *   }
     * })
     * 
     */
    delete<T extends QueueDeleteArgs>(args: SelectSubset<T, QueueDeleteArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Queue.
     * @param {QueueUpdateArgs} args - Arguments to update one Queue.
     * @example
     * // Update one Queue
     * const queue = await prisma.queue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueueUpdateArgs>(args: SelectSubset<T, QueueUpdateArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Queues.
     * @param {QueueDeleteManyArgs} args - Arguments to filter Queues to delete.
     * @example
     * // Delete a few Queues
     * const { count } = await prisma.queue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueueDeleteManyArgs>(args?: SelectSubset<T, QueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Queues
     * const queue = await prisma.queue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueueUpdateManyArgs>(args: SelectSubset<T, QueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Queue.
     * @param {QueueUpsertArgs} args - Arguments to update or create a Queue.
     * @example
     * // Update or create a Queue
     * const queue = await prisma.queue.upsert({
     *   create: {
     *     // ... data to create a Queue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Queue we want to update
     *   }
     * })
     */
    upsert<T extends QueueUpsertArgs>(args: SelectSubset<T, QueueUpsertArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Queues that matches the filter.
     * @param {QueueFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const queue = await prisma.queue.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: QueueFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Queue.
     * @param {QueueAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const queue = await prisma.queue.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: QueueAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueCountArgs} args - Arguments to filter Queues to count.
     * @example
     * // Count the number of Queues
     * const count = await prisma.queue.count({
     *   where: {
     *     // ... the filter for the Queues we want to count
     *   }
     * })
    **/
    count<T extends QueueCountArgs>(
      args?: Subset<T, QueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QueueAggregateArgs>(args: Subset<T, QueueAggregateArgs>): Prisma.PrismaPromise<GetQueueAggregateType<T>>

    /**
     * Group by Queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueGroupByArgs} args - Group by arguments.
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
      T extends QueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueueGroupByArgs['orderBy'] }
        : { orderBy?: QueueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Queue model
   */
  readonly fields: QueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Queue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Queue model
   */
  interface QueueFieldRefs {
    readonly id: FieldRef<"Queue", 'String'>
    readonly userId: FieldRef<"Queue", 'String'>
    readonly createdAt: FieldRef<"Queue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Queue findUnique
   */
  export type QueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * Filter, which Queue to fetch.
     */
    where: QueueWhereUniqueInput
  }

  /**
   * Queue findUniqueOrThrow
   */
  export type QueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * Filter, which Queue to fetch.
     */
    where: QueueWhereUniqueInput
  }

  /**
   * Queue findFirst
   */
  export type QueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * Filter, which Queue to fetch.
     */
    where?: QueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queues to fetch.
     */
    orderBy?: QueueOrderByWithRelationInput | QueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queues.
     */
    cursor?: QueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queues.
     */
    distinct?: QueueScalarFieldEnum | QueueScalarFieldEnum[]
  }

  /**
   * Queue findFirstOrThrow
   */
  export type QueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * Filter, which Queue to fetch.
     */
    where?: QueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queues to fetch.
     */
    orderBy?: QueueOrderByWithRelationInput | QueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queues.
     */
    cursor?: QueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queues.
     */
    distinct?: QueueScalarFieldEnum | QueueScalarFieldEnum[]
  }

  /**
   * Queue findMany
   */
  export type QueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * Filter, which Queues to fetch.
     */
    where?: QueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queues to fetch.
     */
    orderBy?: QueueOrderByWithRelationInput | QueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Queues.
     */
    cursor?: QueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queues.
     */
    skip?: number
    distinct?: QueueScalarFieldEnum | QueueScalarFieldEnum[]
  }

  /**
   * Queue create
   */
  export type QueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * The data needed to create a Queue.
     */
    data: XOR<QueueCreateInput, QueueUncheckedCreateInput>
  }

  /**
   * Queue createMany
   */
  export type QueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Queues.
     */
    data: QueueCreateManyInput | QueueCreateManyInput[]
  }

  /**
   * Queue update
   */
  export type QueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * The data needed to update a Queue.
     */
    data: XOR<QueueUpdateInput, QueueUncheckedUpdateInput>
    /**
     * Choose, which Queue to update.
     */
    where: QueueWhereUniqueInput
  }

  /**
   * Queue updateMany
   */
  export type QueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Queues.
     */
    data: XOR<QueueUpdateManyMutationInput, QueueUncheckedUpdateManyInput>
    /**
     * Filter which Queues to update
     */
    where?: QueueWhereInput
    /**
     * Limit how many Queues to update.
     */
    limit?: number
  }

  /**
   * Queue upsert
   */
  export type QueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * The filter to search for the Queue to update in case it exists.
     */
    where: QueueWhereUniqueInput
    /**
     * In case the Queue found by the `where` argument doesn't exist, create a new Queue with this data.
     */
    create: XOR<QueueCreateInput, QueueUncheckedCreateInput>
    /**
     * In case the Queue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueueUpdateInput, QueueUncheckedUpdateInput>
  }

  /**
   * Queue delete
   */
  export type QueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * Filter which Queue to delete.
     */
    where: QueueWhereUniqueInput
  }

  /**
   * Queue deleteMany
   */
  export type QueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Queues to delete
     */
    where?: QueueWhereInput
    /**
     * Limit how many Queues to delete.
     */
    limit?: number
  }

  /**
   * Queue findRaw
   */
  export type QueueFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Queue aggregateRaw
   */
  export type QueueAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Queue without action
   */
  export type QueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
  }


  /**
   * Model WashHistory
   */

  export type AggregateWashHistory = {
    _count: WashHistoryCountAggregateOutputType | null
    _min: WashHistoryMinAggregateOutputType | null
    _max: WashHistoryMaxAggregateOutputType | null
  }

  export type WashHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    machineId: string | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type WashHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    machineId: string | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type WashHistoryCountAggregateOutputType = {
    id: number
    userId: number
    machineId: number
    startedAt: number
    endedAt: number
    _all: number
  }


  export type WashHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    machineId?: true
    startedAt?: true
    endedAt?: true
  }

  export type WashHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    machineId?: true
    startedAt?: true
    endedAt?: true
  }

  export type WashHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    machineId?: true
    startedAt?: true
    endedAt?: true
    _all?: true
  }

  export type WashHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WashHistory to aggregate.
     */
    where?: WashHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WashHistories to fetch.
     */
    orderBy?: WashHistoryOrderByWithRelationInput | WashHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WashHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WashHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WashHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WashHistories
    **/
    _count?: true | WashHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WashHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WashHistoryMaxAggregateInputType
  }

  export type GetWashHistoryAggregateType<T extends WashHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateWashHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWashHistory[P]>
      : GetScalarType<T[P], AggregateWashHistory[P]>
  }




  export type WashHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WashHistoryWhereInput
    orderBy?: WashHistoryOrderByWithAggregationInput | WashHistoryOrderByWithAggregationInput[]
    by: WashHistoryScalarFieldEnum[] | WashHistoryScalarFieldEnum
    having?: WashHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WashHistoryCountAggregateInputType | true
    _min?: WashHistoryMinAggregateInputType
    _max?: WashHistoryMaxAggregateInputType
  }

  export type WashHistoryGroupByOutputType = {
    id: string
    userId: string
    machineId: string
    startedAt: Date
    endedAt: Date
    _count: WashHistoryCountAggregateOutputType | null
    _min: WashHistoryMinAggregateOutputType | null
    _max: WashHistoryMaxAggregateOutputType | null
  }

  type GetWashHistoryGroupByPayload<T extends WashHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WashHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WashHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WashHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], WashHistoryGroupByOutputType[P]>
        }
      >
    >


  export type WashHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    machineId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    machine?: boolean | MachineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["washHistory"]>



  export type WashHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    machineId?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }

  export type WashHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "machineId" | "startedAt" | "endedAt", ExtArgs["result"]["washHistory"]>
  export type WashHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    machine?: boolean | MachineDefaultArgs<ExtArgs>
  }

  export type $WashHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WashHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      machine: Prisma.$MachinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      machineId: string
      startedAt: Date
      endedAt: Date
    }, ExtArgs["result"]["washHistory"]>
    composites: {}
  }

  type WashHistoryGetPayload<S extends boolean | null | undefined | WashHistoryDefaultArgs> = $Result.GetResult<Prisma.$WashHistoryPayload, S>

  type WashHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WashHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WashHistoryCountAggregateInputType | true
    }

  export interface WashHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WashHistory'], meta: { name: 'WashHistory' } }
    /**
     * Find zero or one WashHistory that matches the filter.
     * @param {WashHistoryFindUniqueArgs} args - Arguments to find a WashHistory
     * @example
     * // Get one WashHistory
     * const washHistory = await prisma.washHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WashHistoryFindUniqueArgs>(args: SelectSubset<T, WashHistoryFindUniqueArgs<ExtArgs>>): Prisma__WashHistoryClient<$Result.GetResult<Prisma.$WashHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WashHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WashHistoryFindUniqueOrThrowArgs} args - Arguments to find a WashHistory
     * @example
     * // Get one WashHistory
     * const washHistory = await prisma.washHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WashHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, WashHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WashHistoryClient<$Result.GetResult<Prisma.$WashHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WashHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WashHistoryFindFirstArgs} args - Arguments to find a WashHistory
     * @example
     * // Get one WashHistory
     * const washHistory = await prisma.washHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WashHistoryFindFirstArgs>(args?: SelectSubset<T, WashHistoryFindFirstArgs<ExtArgs>>): Prisma__WashHistoryClient<$Result.GetResult<Prisma.$WashHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WashHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WashHistoryFindFirstOrThrowArgs} args - Arguments to find a WashHistory
     * @example
     * // Get one WashHistory
     * const washHistory = await prisma.washHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WashHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, WashHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WashHistoryClient<$Result.GetResult<Prisma.$WashHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WashHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WashHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WashHistories
     * const washHistories = await prisma.washHistory.findMany()
     * 
     * // Get first 10 WashHistories
     * const washHistories = await prisma.washHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const washHistoryWithIdOnly = await prisma.washHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WashHistoryFindManyArgs>(args?: SelectSubset<T, WashHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WashHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WashHistory.
     * @param {WashHistoryCreateArgs} args - Arguments to create a WashHistory.
     * @example
     * // Create one WashHistory
     * const WashHistory = await prisma.washHistory.create({
     *   data: {
     *     // ... data to create a WashHistory
     *   }
     * })
     * 
     */
    create<T extends WashHistoryCreateArgs>(args: SelectSubset<T, WashHistoryCreateArgs<ExtArgs>>): Prisma__WashHistoryClient<$Result.GetResult<Prisma.$WashHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WashHistories.
     * @param {WashHistoryCreateManyArgs} args - Arguments to create many WashHistories.
     * @example
     * // Create many WashHistories
     * const washHistory = await prisma.washHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WashHistoryCreateManyArgs>(args?: SelectSubset<T, WashHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WashHistory.
     * @param {WashHistoryDeleteArgs} args - Arguments to delete one WashHistory.
     * @example
     * // Delete one WashHistory
     * const WashHistory = await prisma.washHistory.delete({
     *   where: {
     *     // ... filter to delete one WashHistory
     *   }
     * })
     * 
     */
    delete<T extends WashHistoryDeleteArgs>(args: SelectSubset<T, WashHistoryDeleteArgs<ExtArgs>>): Prisma__WashHistoryClient<$Result.GetResult<Prisma.$WashHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WashHistory.
     * @param {WashHistoryUpdateArgs} args - Arguments to update one WashHistory.
     * @example
     * // Update one WashHistory
     * const washHistory = await prisma.washHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WashHistoryUpdateArgs>(args: SelectSubset<T, WashHistoryUpdateArgs<ExtArgs>>): Prisma__WashHistoryClient<$Result.GetResult<Prisma.$WashHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WashHistories.
     * @param {WashHistoryDeleteManyArgs} args - Arguments to filter WashHistories to delete.
     * @example
     * // Delete a few WashHistories
     * const { count } = await prisma.washHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WashHistoryDeleteManyArgs>(args?: SelectSubset<T, WashHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WashHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WashHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WashHistories
     * const washHistory = await prisma.washHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WashHistoryUpdateManyArgs>(args: SelectSubset<T, WashHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WashHistory.
     * @param {WashHistoryUpsertArgs} args - Arguments to update or create a WashHistory.
     * @example
     * // Update or create a WashHistory
     * const washHistory = await prisma.washHistory.upsert({
     *   create: {
     *     // ... data to create a WashHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WashHistory we want to update
     *   }
     * })
     */
    upsert<T extends WashHistoryUpsertArgs>(args: SelectSubset<T, WashHistoryUpsertArgs<ExtArgs>>): Prisma__WashHistoryClient<$Result.GetResult<Prisma.$WashHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WashHistories that matches the filter.
     * @param {WashHistoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const washHistory = await prisma.washHistory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: WashHistoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a WashHistory.
     * @param {WashHistoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const washHistory = await prisma.washHistory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: WashHistoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of WashHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WashHistoryCountArgs} args - Arguments to filter WashHistories to count.
     * @example
     * // Count the number of WashHistories
     * const count = await prisma.washHistory.count({
     *   where: {
     *     // ... the filter for the WashHistories we want to count
     *   }
     * })
    **/
    count<T extends WashHistoryCountArgs>(
      args?: Subset<T, WashHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WashHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WashHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WashHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WashHistoryAggregateArgs>(args: Subset<T, WashHistoryAggregateArgs>): Prisma.PrismaPromise<GetWashHistoryAggregateType<T>>

    /**
     * Group by WashHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WashHistoryGroupByArgs} args - Group by arguments.
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
      T extends WashHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WashHistoryGroupByArgs['orderBy'] }
        : { orderBy?: WashHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WashHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWashHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WashHistory model
   */
  readonly fields: WashHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WashHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WashHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    machine<T extends MachineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MachineDefaultArgs<ExtArgs>>): Prisma__MachineClient<$Result.GetResult<Prisma.$MachinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WashHistory model
   */
  interface WashHistoryFieldRefs {
    readonly id: FieldRef<"WashHistory", 'String'>
    readonly userId: FieldRef<"WashHistory", 'String'>
    readonly machineId: FieldRef<"WashHistory", 'String'>
    readonly startedAt: FieldRef<"WashHistory", 'DateTime'>
    readonly endedAt: FieldRef<"WashHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WashHistory findUnique
   */
  export type WashHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WashHistory
     */
    select?: WashHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WashHistory
     */
    omit?: WashHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WashHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WashHistory to fetch.
     */
    where: WashHistoryWhereUniqueInput
  }

  /**
   * WashHistory findUniqueOrThrow
   */
  export type WashHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WashHistory
     */
    select?: WashHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WashHistory
     */
    omit?: WashHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WashHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WashHistory to fetch.
     */
    where: WashHistoryWhereUniqueInput
  }

  /**
   * WashHistory findFirst
   */
  export type WashHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WashHistory
     */
    select?: WashHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WashHistory
     */
    omit?: WashHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WashHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WashHistory to fetch.
     */
    where?: WashHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WashHistories to fetch.
     */
    orderBy?: WashHistoryOrderByWithRelationInput | WashHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WashHistories.
     */
    cursor?: WashHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WashHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WashHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WashHistories.
     */
    distinct?: WashHistoryScalarFieldEnum | WashHistoryScalarFieldEnum[]
  }

  /**
   * WashHistory findFirstOrThrow
   */
  export type WashHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WashHistory
     */
    select?: WashHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WashHistory
     */
    omit?: WashHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WashHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WashHistory to fetch.
     */
    where?: WashHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WashHistories to fetch.
     */
    orderBy?: WashHistoryOrderByWithRelationInput | WashHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WashHistories.
     */
    cursor?: WashHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WashHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WashHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WashHistories.
     */
    distinct?: WashHistoryScalarFieldEnum | WashHistoryScalarFieldEnum[]
  }

  /**
   * WashHistory findMany
   */
  export type WashHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WashHistory
     */
    select?: WashHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WashHistory
     */
    omit?: WashHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WashHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WashHistories to fetch.
     */
    where?: WashHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WashHistories to fetch.
     */
    orderBy?: WashHistoryOrderByWithRelationInput | WashHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WashHistories.
     */
    cursor?: WashHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WashHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WashHistories.
     */
    skip?: number
    distinct?: WashHistoryScalarFieldEnum | WashHistoryScalarFieldEnum[]
  }

  /**
   * WashHistory create
   */
  export type WashHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WashHistory
     */
    select?: WashHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WashHistory
     */
    omit?: WashHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WashHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a WashHistory.
     */
    data: XOR<WashHistoryCreateInput, WashHistoryUncheckedCreateInput>
  }

  /**
   * WashHistory createMany
   */
  export type WashHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WashHistories.
     */
    data: WashHistoryCreateManyInput | WashHistoryCreateManyInput[]
  }

  /**
   * WashHistory update
   */
  export type WashHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WashHistory
     */
    select?: WashHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WashHistory
     */
    omit?: WashHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WashHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a WashHistory.
     */
    data: XOR<WashHistoryUpdateInput, WashHistoryUncheckedUpdateInput>
    /**
     * Choose, which WashHistory to update.
     */
    where: WashHistoryWhereUniqueInput
  }

  /**
   * WashHistory updateMany
   */
  export type WashHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WashHistories.
     */
    data: XOR<WashHistoryUpdateManyMutationInput, WashHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WashHistories to update
     */
    where?: WashHistoryWhereInput
    /**
     * Limit how many WashHistories to update.
     */
    limit?: number
  }

  /**
   * WashHistory upsert
   */
  export type WashHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WashHistory
     */
    select?: WashHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WashHistory
     */
    omit?: WashHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WashHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the WashHistory to update in case it exists.
     */
    where: WashHistoryWhereUniqueInput
    /**
     * In case the WashHistory found by the `where` argument doesn't exist, create a new WashHistory with this data.
     */
    create: XOR<WashHistoryCreateInput, WashHistoryUncheckedCreateInput>
    /**
     * In case the WashHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WashHistoryUpdateInput, WashHistoryUncheckedUpdateInput>
  }

  /**
   * WashHistory delete
   */
  export type WashHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WashHistory
     */
    select?: WashHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WashHistory
     */
    omit?: WashHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WashHistoryInclude<ExtArgs> | null
    /**
     * Filter which WashHistory to delete.
     */
    where: WashHistoryWhereUniqueInput
  }

  /**
   * WashHistory deleteMany
   */
  export type WashHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WashHistories to delete
     */
    where?: WashHistoryWhereInput
    /**
     * Limit how many WashHistories to delete.
     */
    limit?: number
  }

  /**
   * WashHistory findRaw
   */
  export type WashHistoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * WashHistory aggregateRaw
   */
  export type WashHistoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * WashHistory without action
   */
  export type WashHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WashHistory
     */
    select?: WashHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WashHistory
     */
    omit?: WashHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WashHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MachineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    userId: 'userId',
    startedAt: 'startedAt',
    estimatedEnd: 'estimatedEnd',
    updatedAt: 'updatedAt'
  };

  export type MachineScalarFieldEnum = (typeof MachineScalarFieldEnum)[keyof typeof MachineScalarFieldEnum]


  export const QueueScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type QueueScalarFieldEnum = (typeof QueueScalarFieldEnum)[keyof typeof QueueScalarFieldEnum]


  export const WashHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    machineId: 'machineId',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
  };

  export type WashHistoryScalarFieldEnum = (typeof WashHistoryScalarFieldEnum)[keyof typeof WashHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MachineStatus'
   */
  export type EnumMachineStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MachineStatus'>
    


  /**
   * Reference to a field of type 'MachineStatus[]'
   */
  export type ListEnumMachineStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MachineStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    machines?: MachineListRelationFilter
    queue?: QueueListRelationFilter
    washHistory?: WashHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    machines?: MachineOrderByRelationAggregateInput
    queue?: QueueOrderByRelationAggregateInput
    washHistory?: WashHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    machines?: MachineListRelationFilter
    queue?: QueueListRelationFilter
    washHistory?: WashHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MachineWhereInput = {
    AND?: MachineWhereInput | MachineWhereInput[]
    OR?: MachineWhereInput[]
    NOT?: MachineWhereInput | MachineWhereInput[]
    id?: StringFilter<"Machine"> | string
    name?: StringFilter<"Machine"> | string
    status?: EnumMachineStatusFilter<"Machine"> | $Enums.MachineStatus
    userId?: StringNullableFilter<"Machine"> | string | null
    startedAt?: DateTimeNullableFilter<"Machine"> | Date | string | null
    estimatedEnd?: DateTimeNullableFilter<"Machine"> | Date | string | null
    updatedAt?: DateTimeFilter<"Machine"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    washHistory?: WashHistoryListRelationFilter
  }

  export type MachineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    startedAt?: SortOrder
    estimatedEnd?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    washHistory?: WashHistoryOrderByRelationAggregateInput
  }

  export type MachineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MachineWhereInput | MachineWhereInput[]
    OR?: MachineWhereInput[]
    NOT?: MachineWhereInput | MachineWhereInput[]
    name?: StringFilter<"Machine"> | string
    status?: EnumMachineStatusFilter<"Machine"> | $Enums.MachineStatus
    userId?: StringNullableFilter<"Machine"> | string | null
    startedAt?: DateTimeNullableFilter<"Machine"> | Date | string | null
    estimatedEnd?: DateTimeNullableFilter<"Machine"> | Date | string | null
    updatedAt?: DateTimeFilter<"Machine"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    washHistory?: WashHistoryListRelationFilter
  }, "id">

  export type MachineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    startedAt?: SortOrder
    estimatedEnd?: SortOrder
    updatedAt?: SortOrder
    _count?: MachineCountOrderByAggregateInput
    _max?: MachineMaxOrderByAggregateInput
    _min?: MachineMinOrderByAggregateInput
  }

  export type MachineScalarWhereWithAggregatesInput = {
    AND?: MachineScalarWhereWithAggregatesInput | MachineScalarWhereWithAggregatesInput[]
    OR?: MachineScalarWhereWithAggregatesInput[]
    NOT?: MachineScalarWhereWithAggregatesInput | MachineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Machine"> | string
    name?: StringWithAggregatesFilter<"Machine"> | string
    status?: EnumMachineStatusWithAggregatesFilter<"Machine"> | $Enums.MachineStatus
    userId?: StringNullableWithAggregatesFilter<"Machine"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"Machine"> | Date | string | null
    estimatedEnd?: DateTimeNullableWithAggregatesFilter<"Machine"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Machine"> | Date | string
  }

  export type QueueWhereInput = {
    AND?: QueueWhereInput | QueueWhereInput[]
    OR?: QueueWhereInput[]
    NOT?: QueueWhereInput | QueueWhereInput[]
    id?: StringFilter<"Queue"> | string
    userId?: StringFilter<"Queue"> | string
    createdAt?: DateTimeFilter<"Queue"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type QueueOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type QueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QueueWhereInput | QueueWhereInput[]
    OR?: QueueWhereInput[]
    NOT?: QueueWhereInput | QueueWhereInput[]
    userId?: StringFilter<"Queue"> | string
    createdAt?: DateTimeFilter<"Queue"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type QueueOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: QueueCountOrderByAggregateInput
    _max?: QueueMaxOrderByAggregateInput
    _min?: QueueMinOrderByAggregateInput
  }

  export type QueueScalarWhereWithAggregatesInput = {
    AND?: QueueScalarWhereWithAggregatesInput | QueueScalarWhereWithAggregatesInput[]
    OR?: QueueScalarWhereWithAggregatesInput[]
    NOT?: QueueScalarWhereWithAggregatesInput | QueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Queue"> | string
    userId?: StringWithAggregatesFilter<"Queue"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Queue"> | Date | string
  }

  export type WashHistoryWhereInput = {
    AND?: WashHistoryWhereInput | WashHistoryWhereInput[]
    OR?: WashHistoryWhereInput[]
    NOT?: WashHistoryWhereInput | WashHistoryWhereInput[]
    id?: StringFilter<"WashHistory"> | string
    userId?: StringFilter<"WashHistory"> | string
    machineId?: StringFilter<"WashHistory"> | string
    startedAt?: DateTimeFilter<"WashHistory"> | Date | string
    endedAt?: DateTimeFilter<"WashHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    machine?: XOR<MachineScalarRelationFilter, MachineWhereInput>
  }

  export type WashHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    machineId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    machine?: MachineOrderByWithRelationInput
  }

  export type WashHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WashHistoryWhereInput | WashHistoryWhereInput[]
    OR?: WashHistoryWhereInput[]
    NOT?: WashHistoryWhereInput | WashHistoryWhereInput[]
    userId?: StringFilter<"WashHistory"> | string
    machineId?: StringFilter<"WashHistory"> | string
    startedAt?: DateTimeFilter<"WashHistory"> | Date | string
    endedAt?: DateTimeFilter<"WashHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    machine?: XOR<MachineScalarRelationFilter, MachineWhereInput>
  }, "id">

  export type WashHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    machineId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    _count?: WashHistoryCountOrderByAggregateInput
    _max?: WashHistoryMaxOrderByAggregateInput
    _min?: WashHistoryMinOrderByAggregateInput
  }

  export type WashHistoryScalarWhereWithAggregatesInput = {
    AND?: WashHistoryScalarWhereWithAggregatesInput | WashHistoryScalarWhereWithAggregatesInput[]
    OR?: WashHistoryScalarWhereWithAggregatesInput[]
    NOT?: WashHistoryScalarWhereWithAggregatesInput | WashHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WashHistory"> | string
    userId?: StringWithAggregatesFilter<"WashHistory"> | string
    machineId?: StringWithAggregatesFilter<"WashHistory"> | string
    startedAt?: DateTimeWithAggregatesFilter<"WashHistory"> | Date | string
    endedAt?: DateTimeWithAggregatesFilter<"WashHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    machines?: MachineCreateNestedManyWithoutUserInput
    queue?: QueueCreateNestedManyWithoutUserInput
    washHistory?: WashHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    machines?: MachineUncheckedCreateNestedManyWithoutUserInput
    queue?: QueueUncheckedCreateNestedManyWithoutUserInput
    washHistory?: WashHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUpdateManyWithoutUserNestedInput
    queue?: QueueUpdateManyWithoutUserNestedInput
    washHistory?: WashHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUncheckedUpdateManyWithoutUserNestedInput
    queue?: QueueUncheckedUpdateManyWithoutUserNestedInput
    washHistory?: WashHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineCreateInput = {
    id?: string
    name: string
    status?: $Enums.MachineStatus
    startedAt?: Date | string | null
    estimatedEnd?: Date | string | null
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutMachinesInput
    washHistory?: WashHistoryCreateNestedManyWithoutMachineInput
  }

  export type MachineUncheckedCreateInput = {
    id?: string
    name: string
    status?: $Enums.MachineStatus
    userId?: string | null
    startedAt?: Date | string | null
    estimatedEnd?: Date | string | null
    updatedAt?: Date | string
    washHistory?: WashHistoryUncheckedCreateNestedManyWithoutMachineInput
  }

  export type MachineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMachineStatusFieldUpdateOperationsInput | $Enums.MachineStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMachinesNestedInput
    washHistory?: WashHistoryUpdateManyWithoutMachineNestedInput
  }

  export type MachineUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMachineStatusFieldUpdateOperationsInput | $Enums.MachineStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    washHistory?: WashHistoryUncheckedUpdateManyWithoutMachineNestedInput
  }

  export type MachineCreateManyInput = {
    id?: string
    name: string
    status?: $Enums.MachineStatus
    userId?: string | null
    startedAt?: Date | string | null
    estimatedEnd?: Date | string | null
    updatedAt?: Date | string
  }

  export type MachineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMachineStatusFieldUpdateOperationsInput | $Enums.MachineStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMachineStatusFieldUpdateOperationsInput | $Enums.MachineStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueueCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutQueueInput
  }

  export type QueueUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type QueueUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQueueNestedInput
  }

  export type QueueUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueueCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type QueueUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueueUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WashHistoryCreateInput = {
    id?: string
    startedAt: Date | string
    endedAt: Date | string
    user: UserCreateNestedOneWithoutWashHistoryInput
    machine: MachineCreateNestedOneWithoutWashHistoryInput
  }

  export type WashHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    machineId: string
    startedAt: Date | string
    endedAt: Date | string
  }

  export type WashHistoryUpdateInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWashHistoryNestedInput
    machine?: MachineUpdateOneRequiredWithoutWashHistoryNestedInput
  }

  export type WashHistoryUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WashHistoryCreateManyInput = {
    id?: string
    userId: string
    machineId: string
    startedAt: Date | string
    endedAt: Date | string
  }

  export type WashHistoryUpdateManyMutationInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WashHistoryUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MachineListRelationFilter = {
    every?: MachineWhereInput
    some?: MachineWhereInput
    none?: MachineWhereInput
  }

  export type QueueListRelationFilter = {
    every?: QueueWhereInput
    some?: QueueWhereInput
    none?: QueueWhereInput
  }

  export type WashHistoryListRelationFilter = {
    every?: WashHistoryWhereInput
    some?: WashHistoryWhereInput
    none?: WashHistoryWhereInput
  }

  export type MachineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QueueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WashHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMachineStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MachineStatus | EnumMachineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MachineStatus[] | ListEnumMachineStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MachineStatus[] | ListEnumMachineStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMachineStatusFilter<$PrismaModel> | $Enums.MachineStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MachineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    startedAt?: SortOrder
    estimatedEnd?: SortOrder
    updatedAt?: SortOrder
  }

  export type MachineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    startedAt?: SortOrder
    estimatedEnd?: SortOrder
    updatedAt?: SortOrder
  }

  export type MachineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    startedAt?: SortOrder
    estimatedEnd?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMachineStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MachineStatus | EnumMachineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MachineStatus[] | ListEnumMachineStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MachineStatus[] | ListEnumMachineStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMachineStatusWithAggregatesFilter<$PrismaModel> | $Enums.MachineStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMachineStatusFilter<$PrismaModel>
    _max?: NestedEnumMachineStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QueueCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type QueueMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type QueueMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type MachineScalarRelationFilter = {
    is?: MachineWhereInput
    isNot?: MachineWhereInput
  }

  export type WashHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    machineId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type WashHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    machineId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type WashHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    machineId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type MachineCreateNestedManyWithoutUserInput = {
    create?: XOR<MachineCreateWithoutUserInput, MachineUncheckedCreateWithoutUserInput> | MachineCreateWithoutUserInput[] | MachineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutUserInput | MachineCreateOrConnectWithoutUserInput[]
    createMany?: MachineCreateManyUserInputEnvelope
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
  }

  export type QueueCreateNestedManyWithoutUserInput = {
    create?: XOR<QueueCreateWithoutUserInput, QueueUncheckedCreateWithoutUserInput> | QueueCreateWithoutUserInput[] | QueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueueCreateOrConnectWithoutUserInput | QueueCreateOrConnectWithoutUserInput[]
    createMany?: QueueCreateManyUserInputEnvelope
    connect?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
  }

  export type WashHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<WashHistoryCreateWithoutUserInput, WashHistoryUncheckedCreateWithoutUserInput> | WashHistoryCreateWithoutUserInput[] | WashHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WashHistoryCreateOrConnectWithoutUserInput | WashHistoryCreateOrConnectWithoutUserInput[]
    createMany?: WashHistoryCreateManyUserInputEnvelope
    connect?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
  }

  export type MachineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MachineCreateWithoutUserInput, MachineUncheckedCreateWithoutUserInput> | MachineCreateWithoutUserInput[] | MachineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutUserInput | MachineCreateOrConnectWithoutUserInput[]
    createMany?: MachineCreateManyUserInputEnvelope
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
  }

  export type QueueUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QueueCreateWithoutUserInput, QueueUncheckedCreateWithoutUserInput> | QueueCreateWithoutUserInput[] | QueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueueCreateOrConnectWithoutUserInput | QueueCreateOrConnectWithoutUserInput[]
    createMany?: QueueCreateManyUserInputEnvelope
    connect?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
  }

  export type WashHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WashHistoryCreateWithoutUserInput, WashHistoryUncheckedCreateWithoutUserInput> | WashHistoryCreateWithoutUserInput[] | WashHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WashHistoryCreateOrConnectWithoutUserInput | WashHistoryCreateOrConnectWithoutUserInput[]
    createMany?: WashHistoryCreateManyUserInputEnvelope
    connect?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MachineUpdateManyWithoutUserNestedInput = {
    create?: XOR<MachineCreateWithoutUserInput, MachineUncheckedCreateWithoutUserInput> | MachineCreateWithoutUserInput[] | MachineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutUserInput | MachineCreateOrConnectWithoutUserInput[]
    upsert?: MachineUpsertWithWhereUniqueWithoutUserInput | MachineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MachineCreateManyUserInputEnvelope
    set?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    disconnect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    delete?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    update?: MachineUpdateWithWhereUniqueWithoutUserInput | MachineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MachineUpdateManyWithWhereWithoutUserInput | MachineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MachineScalarWhereInput | MachineScalarWhereInput[]
  }

  export type QueueUpdateManyWithoutUserNestedInput = {
    create?: XOR<QueueCreateWithoutUserInput, QueueUncheckedCreateWithoutUserInput> | QueueCreateWithoutUserInput[] | QueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueueCreateOrConnectWithoutUserInput | QueueCreateOrConnectWithoutUserInput[]
    upsert?: QueueUpsertWithWhereUniqueWithoutUserInput | QueueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QueueCreateManyUserInputEnvelope
    set?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    disconnect?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    delete?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    connect?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    update?: QueueUpdateWithWhereUniqueWithoutUserInput | QueueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QueueUpdateManyWithWhereWithoutUserInput | QueueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QueueScalarWhereInput | QueueScalarWhereInput[]
  }

  export type WashHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<WashHistoryCreateWithoutUserInput, WashHistoryUncheckedCreateWithoutUserInput> | WashHistoryCreateWithoutUserInput[] | WashHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WashHistoryCreateOrConnectWithoutUserInput | WashHistoryCreateOrConnectWithoutUserInput[]
    upsert?: WashHistoryUpsertWithWhereUniqueWithoutUserInput | WashHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WashHistoryCreateManyUserInputEnvelope
    set?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    disconnect?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    delete?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    connect?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    update?: WashHistoryUpdateWithWhereUniqueWithoutUserInput | WashHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WashHistoryUpdateManyWithWhereWithoutUserInput | WashHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WashHistoryScalarWhereInput | WashHistoryScalarWhereInput[]
  }

  export type MachineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MachineCreateWithoutUserInput, MachineUncheckedCreateWithoutUserInput> | MachineCreateWithoutUserInput[] | MachineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MachineCreateOrConnectWithoutUserInput | MachineCreateOrConnectWithoutUserInput[]
    upsert?: MachineUpsertWithWhereUniqueWithoutUserInput | MachineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MachineCreateManyUserInputEnvelope
    set?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    disconnect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    delete?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    connect?: MachineWhereUniqueInput | MachineWhereUniqueInput[]
    update?: MachineUpdateWithWhereUniqueWithoutUserInput | MachineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MachineUpdateManyWithWhereWithoutUserInput | MachineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MachineScalarWhereInput | MachineScalarWhereInput[]
  }

  export type QueueUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QueueCreateWithoutUserInput, QueueUncheckedCreateWithoutUserInput> | QueueCreateWithoutUserInput[] | QueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueueCreateOrConnectWithoutUserInput | QueueCreateOrConnectWithoutUserInput[]
    upsert?: QueueUpsertWithWhereUniqueWithoutUserInput | QueueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QueueCreateManyUserInputEnvelope
    set?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    disconnect?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    delete?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    connect?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    update?: QueueUpdateWithWhereUniqueWithoutUserInput | QueueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QueueUpdateManyWithWhereWithoutUserInput | QueueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QueueScalarWhereInput | QueueScalarWhereInput[]
  }

  export type WashHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WashHistoryCreateWithoutUserInput, WashHistoryUncheckedCreateWithoutUserInput> | WashHistoryCreateWithoutUserInput[] | WashHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WashHistoryCreateOrConnectWithoutUserInput | WashHistoryCreateOrConnectWithoutUserInput[]
    upsert?: WashHistoryUpsertWithWhereUniqueWithoutUserInput | WashHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WashHistoryCreateManyUserInputEnvelope
    set?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    disconnect?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    delete?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    connect?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    update?: WashHistoryUpdateWithWhereUniqueWithoutUserInput | WashHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WashHistoryUpdateManyWithWhereWithoutUserInput | WashHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WashHistoryScalarWhereInput | WashHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMachinesInput = {
    create?: XOR<UserCreateWithoutMachinesInput, UserUncheckedCreateWithoutMachinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMachinesInput
    connect?: UserWhereUniqueInput
  }

  export type WashHistoryCreateNestedManyWithoutMachineInput = {
    create?: XOR<WashHistoryCreateWithoutMachineInput, WashHistoryUncheckedCreateWithoutMachineInput> | WashHistoryCreateWithoutMachineInput[] | WashHistoryUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: WashHistoryCreateOrConnectWithoutMachineInput | WashHistoryCreateOrConnectWithoutMachineInput[]
    createMany?: WashHistoryCreateManyMachineInputEnvelope
    connect?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
  }

  export type WashHistoryUncheckedCreateNestedManyWithoutMachineInput = {
    create?: XOR<WashHistoryCreateWithoutMachineInput, WashHistoryUncheckedCreateWithoutMachineInput> | WashHistoryCreateWithoutMachineInput[] | WashHistoryUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: WashHistoryCreateOrConnectWithoutMachineInput | WashHistoryCreateOrConnectWithoutMachineInput[]
    createMany?: WashHistoryCreateManyMachineInputEnvelope
    connect?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
  }

  export type EnumMachineStatusFieldUpdateOperationsInput = {
    set?: $Enums.MachineStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type UserUpdateOneWithoutMachinesNestedInput = {
    create?: XOR<UserCreateWithoutMachinesInput, UserUncheckedCreateWithoutMachinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMachinesInput
    upsert?: UserUpsertWithoutMachinesInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMachinesInput, UserUpdateWithoutMachinesInput>, UserUncheckedUpdateWithoutMachinesInput>
  }

  export type WashHistoryUpdateManyWithoutMachineNestedInput = {
    create?: XOR<WashHistoryCreateWithoutMachineInput, WashHistoryUncheckedCreateWithoutMachineInput> | WashHistoryCreateWithoutMachineInput[] | WashHistoryUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: WashHistoryCreateOrConnectWithoutMachineInput | WashHistoryCreateOrConnectWithoutMachineInput[]
    upsert?: WashHistoryUpsertWithWhereUniqueWithoutMachineInput | WashHistoryUpsertWithWhereUniqueWithoutMachineInput[]
    createMany?: WashHistoryCreateManyMachineInputEnvelope
    set?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    disconnect?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    delete?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    connect?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    update?: WashHistoryUpdateWithWhereUniqueWithoutMachineInput | WashHistoryUpdateWithWhereUniqueWithoutMachineInput[]
    updateMany?: WashHistoryUpdateManyWithWhereWithoutMachineInput | WashHistoryUpdateManyWithWhereWithoutMachineInput[]
    deleteMany?: WashHistoryScalarWhereInput | WashHistoryScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type WashHistoryUncheckedUpdateManyWithoutMachineNestedInput = {
    create?: XOR<WashHistoryCreateWithoutMachineInput, WashHistoryUncheckedCreateWithoutMachineInput> | WashHistoryCreateWithoutMachineInput[] | WashHistoryUncheckedCreateWithoutMachineInput[]
    connectOrCreate?: WashHistoryCreateOrConnectWithoutMachineInput | WashHistoryCreateOrConnectWithoutMachineInput[]
    upsert?: WashHistoryUpsertWithWhereUniqueWithoutMachineInput | WashHistoryUpsertWithWhereUniqueWithoutMachineInput[]
    createMany?: WashHistoryCreateManyMachineInputEnvelope
    set?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    disconnect?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    delete?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    connect?: WashHistoryWhereUniqueInput | WashHistoryWhereUniqueInput[]
    update?: WashHistoryUpdateWithWhereUniqueWithoutMachineInput | WashHistoryUpdateWithWhereUniqueWithoutMachineInput[]
    updateMany?: WashHistoryUpdateManyWithWhereWithoutMachineInput | WashHistoryUpdateManyWithWhereWithoutMachineInput[]
    deleteMany?: WashHistoryScalarWhereInput | WashHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQueueInput = {
    create?: XOR<UserCreateWithoutQueueInput, UserUncheckedCreateWithoutQueueInput>
    connectOrCreate?: UserCreateOrConnectWithoutQueueInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutQueueNestedInput = {
    create?: XOR<UserCreateWithoutQueueInput, UserUncheckedCreateWithoutQueueInput>
    connectOrCreate?: UserCreateOrConnectWithoutQueueInput
    upsert?: UserUpsertWithoutQueueInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQueueInput, UserUpdateWithoutQueueInput>, UserUncheckedUpdateWithoutQueueInput>
  }

  export type UserCreateNestedOneWithoutWashHistoryInput = {
    create?: XOR<UserCreateWithoutWashHistoryInput, UserUncheckedCreateWithoutWashHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutWashHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type MachineCreateNestedOneWithoutWashHistoryInput = {
    create?: XOR<MachineCreateWithoutWashHistoryInput, MachineUncheckedCreateWithoutWashHistoryInput>
    connectOrCreate?: MachineCreateOrConnectWithoutWashHistoryInput
    connect?: MachineWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWashHistoryNestedInput = {
    create?: XOR<UserCreateWithoutWashHistoryInput, UserUncheckedCreateWithoutWashHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutWashHistoryInput
    upsert?: UserUpsertWithoutWashHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWashHistoryInput, UserUpdateWithoutWashHistoryInput>, UserUncheckedUpdateWithoutWashHistoryInput>
  }

  export type MachineUpdateOneRequiredWithoutWashHistoryNestedInput = {
    create?: XOR<MachineCreateWithoutWashHistoryInput, MachineUncheckedCreateWithoutWashHistoryInput>
    connectOrCreate?: MachineCreateOrConnectWithoutWashHistoryInput
    upsert?: MachineUpsertWithoutWashHistoryInput
    connect?: MachineWhereUniqueInput
    update?: XOR<XOR<MachineUpdateToOneWithWhereWithoutWashHistoryInput, MachineUpdateWithoutWashHistoryInput>, MachineUncheckedUpdateWithoutWashHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMachineStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MachineStatus | EnumMachineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MachineStatus[] | ListEnumMachineStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MachineStatus[] | ListEnumMachineStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMachineStatusFilter<$PrismaModel> | $Enums.MachineStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedEnumMachineStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MachineStatus | EnumMachineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MachineStatus[] | ListEnumMachineStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MachineStatus[] | ListEnumMachineStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMachineStatusWithAggregatesFilter<$PrismaModel> | $Enums.MachineStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMachineStatusFilter<$PrismaModel>
    _max?: NestedEnumMachineStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type MachineCreateWithoutUserInput = {
    id?: string
    name: string
    status?: $Enums.MachineStatus
    startedAt?: Date | string | null
    estimatedEnd?: Date | string | null
    updatedAt?: Date | string
    washHistory?: WashHistoryCreateNestedManyWithoutMachineInput
  }

  export type MachineUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    status?: $Enums.MachineStatus
    startedAt?: Date | string | null
    estimatedEnd?: Date | string | null
    updatedAt?: Date | string
    washHistory?: WashHistoryUncheckedCreateNestedManyWithoutMachineInput
  }

  export type MachineCreateOrConnectWithoutUserInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutUserInput, MachineUncheckedCreateWithoutUserInput>
  }

  export type MachineCreateManyUserInputEnvelope = {
    data: MachineCreateManyUserInput | MachineCreateManyUserInput[]
  }

  export type QueueCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
  }

  export type QueueUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
  }

  export type QueueCreateOrConnectWithoutUserInput = {
    where: QueueWhereUniqueInput
    create: XOR<QueueCreateWithoutUserInput, QueueUncheckedCreateWithoutUserInput>
  }

  export type QueueCreateManyUserInputEnvelope = {
    data: QueueCreateManyUserInput | QueueCreateManyUserInput[]
  }

  export type WashHistoryCreateWithoutUserInput = {
    id?: string
    startedAt: Date | string
    endedAt: Date | string
    machine: MachineCreateNestedOneWithoutWashHistoryInput
  }

  export type WashHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    machineId: string
    startedAt: Date | string
    endedAt: Date | string
  }

  export type WashHistoryCreateOrConnectWithoutUserInput = {
    where: WashHistoryWhereUniqueInput
    create: XOR<WashHistoryCreateWithoutUserInput, WashHistoryUncheckedCreateWithoutUserInput>
  }

  export type WashHistoryCreateManyUserInputEnvelope = {
    data: WashHistoryCreateManyUserInput | WashHistoryCreateManyUserInput[]
  }

  export type MachineUpsertWithWhereUniqueWithoutUserInput = {
    where: MachineWhereUniqueInput
    update: XOR<MachineUpdateWithoutUserInput, MachineUncheckedUpdateWithoutUserInput>
    create: XOR<MachineCreateWithoutUserInput, MachineUncheckedCreateWithoutUserInput>
  }

  export type MachineUpdateWithWhereUniqueWithoutUserInput = {
    where: MachineWhereUniqueInput
    data: XOR<MachineUpdateWithoutUserInput, MachineUncheckedUpdateWithoutUserInput>
  }

  export type MachineUpdateManyWithWhereWithoutUserInput = {
    where: MachineScalarWhereInput
    data: XOR<MachineUpdateManyMutationInput, MachineUncheckedUpdateManyWithoutUserInput>
  }

  export type MachineScalarWhereInput = {
    AND?: MachineScalarWhereInput | MachineScalarWhereInput[]
    OR?: MachineScalarWhereInput[]
    NOT?: MachineScalarWhereInput | MachineScalarWhereInput[]
    id?: StringFilter<"Machine"> | string
    name?: StringFilter<"Machine"> | string
    status?: EnumMachineStatusFilter<"Machine"> | $Enums.MachineStatus
    userId?: StringNullableFilter<"Machine"> | string | null
    startedAt?: DateTimeNullableFilter<"Machine"> | Date | string | null
    estimatedEnd?: DateTimeNullableFilter<"Machine"> | Date | string | null
    updatedAt?: DateTimeFilter<"Machine"> | Date | string
  }

  export type QueueUpsertWithWhereUniqueWithoutUserInput = {
    where: QueueWhereUniqueInput
    update: XOR<QueueUpdateWithoutUserInput, QueueUncheckedUpdateWithoutUserInput>
    create: XOR<QueueCreateWithoutUserInput, QueueUncheckedCreateWithoutUserInput>
  }

  export type QueueUpdateWithWhereUniqueWithoutUserInput = {
    where: QueueWhereUniqueInput
    data: XOR<QueueUpdateWithoutUserInput, QueueUncheckedUpdateWithoutUserInput>
  }

  export type QueueUpdateManyWithWhereWithoutUserInput = {
    where: QueueScalarWhereInput
    data: XOR<QueueUpdateManyMutationInput, QueueUncheckedUpdateManyWithoutUserInput>
  }

  export type QueueScalarWhereInput = {
    AND?: QueueScalarWhereInput | QueueScalarWhereInput[]
    OR?: QueueScalarWhereInput[]
    NOT?: QueueScalarWhereInput | QueueScalarWhereInput[]
    id?: StringFilter<"Queue"> | string
    userId?: StringFilter<"Queue"> | string
    createdAt?: DateTimeFilter<"Queue"> | Date | string
  }

  export type WashHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: WashHistoryWhereUniqueInput
    update: XOR<WashHistoryUpdateWithoutUserInput, WashHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<WashHistoryCreateWithoutUserInput, WashHistoryUncheckedCreateWithoutUserInput>
  }

  export type WashHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: WashHistoryWhereUniqueInput
    data: XOR<WashHistoryUpdateWithoutUserInput, WashHistoryUncheckedUpdateWithoutUserInput>
  }

  export type WashHistoryUpdateManyWithWhereWithoutUserInput = {
    where: WashHistoryScalarWhereInput
    data: XOR<WashHistoryUpdateManyMutationInput, WashHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type WashHistoryScalarWhereInput = {
    AND?: WashHistoryScalarWhereInput | WashHistoryScalarWhereInput[]
    OR?: WashHistoryScalarWhereInput[]
    NOT?: WashHistoryScalarWhereInput | WashHistoryScalarWhereInput[]
    id?: StringFilter<"WashHistory"> | string
    userId?: StringFilter<"WashHistory"> | string
    machineId?: StringFilter<"WashHistory"> | string
    startedAt?: DateTimeFilter<"WashHistory"> | Date | string
    endedAt?: DateTimeFilter<"WashHistory"> | Date | string
  }

  export type UserCreateWithoutMachinesInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    queue?: QueueCreateNestedManyWithoutUserInput
    washHistory?: WashHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMachinesInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    queue?: QueueUncheckedCreateNestedManyWithoutUserInput
    washHistory?: WashHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMachinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMachinesInput, UserUncheckedCreateWithoutMachinesInput>
  }

  export type WashHistoryCreateWithoutMachineInput = {
    id?: string
    startedAt: Date | string
    endedAt: Date | string
    user: UserCreateNestedOneWithoutWashHistoryInput
  }

  export type WashHistoryUncheckedCreateWithoutMachineInput = {
    id?: string
    userId: string
    startedAt: Date | string
    endedAt: Date | string
  }

  export type WashHistoryCreateOrConnectWithoutMachineInput = {
    where: WashHistoryWhereUniqueInput
    create: XOR<WashHistoryCreateWithoutMachineInput, WashHistoryUncheckedCreateWithoutMachineInput>
  }

  export type WashHistoryCreateManyMachineInputEnvelope = {
    data: WashHistoryCreateManyMachineInput | WashHistoryCreateManyMachineInput[]
  }

  export type UserUpsertWithoutMachinesInput = {
    update: XOR<UserUpdateWithoutMachinesInput, UserUncheckedUpdateWithoutMachinesInput>
    create: XOR<UserCreateWithoutMachinesInput, UserUncheckedCreateWithoutMachinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMachinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMachinesInput, UserUncheckedUpdateWithoutMachinesInput>
  }

  export type UserUpdateWithoutMachinesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queue?: QueueUpdateManyWithoutUserNestedInput
    washHistory?: WashHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMachinesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queue?: QueueUncheckedUpdateManyWithoutUserNestedInput
    washHistory?: WashHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WashHistoryUpsertWithWhereUniqueWithoutMachineInput = {
    where: WashHistoryWhereUniqueInput
    update: XOR<WashHistoryUpdateWithoutMachineInput, WashHistoryUncheckedUpdateWithoutMachineInput>
    create: XOR<WashHistoryCreateWithoutMachineInput, WashHistoryUncheckedCreateWithoutMachineInput>
  }

  export type WashHistoryUpdateWithWhereUniqueWithoutMachineInput = {
    where: WashHistoryWhereUniqueInput
    data: XOR<WashHistoryUpdateWithoutMachineInput, WashHistoryUncheckedUpdateWithoutMachineInput>
  }

  export type WashHistoryUpdateManyWithWhereWithoutMachineInput = {
    where: WashHistoryScalarWhereInput
    data: XOR<WashHistoryUpdateManyMutationInput, WashHistoryUncheckedUpdateManyWithoutMachineInput>
  }

  export type UserCreateWithoutQueueInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    machines?: MachineCreateNestedManyWithoutUserInput
    washHistory?: WashHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQueueInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    machines?: MachineUncheckedCreateNestedManyWithoutUserInput
    washHistory?: WashHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQueueInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQueueInput, UserUncheckedCreateWithoutQueueInput>
  }

  export type UserUpsertWithoutQueueInput = {
    update: XOR<UserUpdateWithoutQueueInput, UserUncheckedUpdateWithoutQueueInput>
    create: XOR<UserCreateWithoutQueueInput, UserUncheckedCreateWithoutQueueInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQueueInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQueueInput, UserUncheckedUpdateWithoutQueueInput>
  }

  export type UserUpdateWithoutQueueInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUpdateManyWithoutUserNestedInput
    washHistory?: WashHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQueueInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUncheckedUpdateManyWithoutUserNestedInput
    washHistory?: WashHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWashHistoryInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    machines?: MachineCreateNestedManyWithoutUserInput
    queue?: QueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWashHistoryInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updateAt?: Date | string
    machines?: MachineUncheckedCreateNestedManyWithoutUserInput
    queue?: QueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWashHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWashHistoryInput, UserUncheckedCreateWithoutWashHistoryInput>
  }

  export type MachineCreateWithoutWashHistoryInput = {
    id?: string
    name: string
    status?: $Enums.MachineStatus
    startedAt?: Date | string | null
    estimatedEnd?: Date | string | null
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutMachinesInput
  }

  export type MachineUncheckedCreateWithoutWashHistoryInput = {
    id?: string
    name: string
    status?: $Enums.MachineStatus
    userId?: string | null
    startedAt?: Date | string | null
    estimatedEnd?: Date | string | null
    updatedAt?: Date | string
  }

  export type MachineCreateOrConnectWithoutWashHistoryInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutWashHistoryInput, MachineUncheckedCreateWithoutWashHistoryInput>
  }

  export type UserUpsertWithoutWashHistoryInput = {
    update: XOR<UserUpdateWithoutWashHistoryInput, UserUncheckedUpdateWithoutWashHistoryInput>
    create: XOR<UserCreateWithoutWashHistoryInput, UserUncheckedCreateWithoutWashHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWashHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWashHistoryInput, UserUncheckedUpdateWithoutWashHistoryInput>
  }

  export type UserUpdateWithoutWashHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUpdateManyWithoutUserNestedInput
    queue?: QueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWashHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machines?: MachineUncheckedUpdateManyWithoutUserNestedInput
    queue?: QueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MachineUpsertWithoutWashHistoryInput = {
    update: XOR<MachineUpdateWithoutWashHistoryInput, MachineUncheckedUpdateWithoutWashHistoryInput>
    create: XOR<MachineCreateWithoutWashHistoryInput, MachineUncheckedCreateWithoutWashHistoryInput>
    where?: MachineWhereInput
  }

  export type MachineUpdateToOneWithWhereWithoutWashHistoryInput = {
    where?: MachineWhereInput
    data: XOR<MachineUpdateWithoutWashHistoryInput, MachineUncheckedUpdateWithoutWashHistoryInput>
  }

  export type MachineUpdateWithoutWashHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMachineStatusFieldUpdateOperationsInput | $Enums.MachineStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMachinesNestedInput
  }

  export type MachineUncheckedUpdateWithoutWashHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMachineStatusFieldUpdateOperationsInput | $Enums.MachineStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineCreateManyUserInput = {
    id?: string
    name: string
    status?: $Enums.MachineStatus
    startedAt?: Date | string | null
    estimatedEnd?: Date | string | null
    updatedAt?: Date | string
  }

  export type QueueCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
  }

  export type WashHistoryCreateManyUserInput = {
    id?: string
    machineId: string
    startedAt: Date | string
    endedAt: Date | string
  }

  export type MachineUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMachineStatusFieldUpdateOperationsInput | $Enums.MachineStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    washHistory?: WashHistoryUpdateManyWithoutMachineNestedInput
  }

  export type MachineUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMachineStatusFieldUpdateOperationsInput | $Enums.MachineStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    washHistory?: WashHistoryUncheckedUpdateManyWithoutMachineNestedInput
  }

  export type MachineUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumMachineStatusFieldUpdateOperationsInput | $Enums.MachineStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueueUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueueUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueueUncheckedUpdateManyWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WashHistoryUpdateWithoutUserInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    machine?: MachineUpdateOneRequiredWithoutWashHistoryNestedInput
  }

  export type WashHistoryUncheckedUpdateWithoutUserInput = {
    machineId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WashHistoryUncheckedUpdateManyWithoutUserInput = {
    machineId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WashHistoryCreateManyMachineInput = {
    id?: string
    userId: string
    startedAt: Date | string
    endedAt: Date | string
  }

  export type WashHistoryUpdateWithoutMachineInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWashHistoryNestedInput
  }

  export type WashHistoryUncheckedUpdateWithoutMachineInput = {
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WashHistoryUncheckedUpdateManyWithoutMachineInput = {
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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