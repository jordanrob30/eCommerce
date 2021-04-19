<?php

namespace Container8oUiAyF;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolderd404d = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerd9917 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties15898 = [
        
    ];

    public function getConnection()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getConnection', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getMetadataFactory', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getExpressionBuilder', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'beginTransaction', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getCache', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getCache();
    }

    public function transactional($func)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'transactional', array('func' => $func), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->transactional($func);
    }

    public function commit()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'commit', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->commit();
    }

    public function rollback()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'rollback', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getClassMetadata', array('className' => $className), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'createQuery', array('dql' => $dql), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'createNamedQuery', array('name' => $name), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'createQueryBuilder', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'flush', array('entity' => $entity), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'clear', array('entityName' => $entityName), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->clear($entityName);
    }

    public function close()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'close', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->close();
    }

    public function persist($entity)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'persist', array('entity' => $entity), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'remove', array('entity' => $entity), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'refresh', array('entity' => $entity), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'detach', array('entity' => $entity), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'merge', array('entity' => $entity), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getRepository', array('entityName' => $entityName), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'contains', array('entity' => $entity), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getEventManager', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getConfiguration', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'isOpen', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getUnitOfWork', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getProxyFactory', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'initializeObject', array('obj' => $obj), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'getFilters', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'isFiltersStateClean', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'hasFilters', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return $this->valueHolderd404d->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializerd9917 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolderd404d) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolderd404d = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolderd404d->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, '__get', ['name' => $name], $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        if (isset(self::$publicProperties15898[$name])) {
            return $this->valueHolderd404d->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderd404d;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderd404d;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderd404d;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderd404d;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, '__isset', array('name' => $name), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderd404d;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolderd404d;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, '__unset', array('name' => $name), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderd404d;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolderd404d;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, '__clone', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        $this->valueHolderd404d = clone $this->valueHolderd404d;
    }

    public function __sleep()
    {
        $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, '__sleep', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;

        return array('valueHolderd404d');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerd9917 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerd9917;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerd9917 && ($this->initializerd9917->__invoke($valueHolderd404d, $this, 'initializeProxy', array(), $this->initializerd9917) || 1) && $this->valueHolderd404d = $valueHolderd404d;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolderd404d;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolderd404d;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
