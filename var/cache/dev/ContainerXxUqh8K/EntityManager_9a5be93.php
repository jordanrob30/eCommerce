<?php

namespace ContainerXxUqh8K;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolderb88e3 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerac502 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicPropertiesea5b4 = [
        
    ];

    public function getConnection()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getConnection', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getMetadataFactory', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getExpressionBuilder', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'beginTransaction', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getCache', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getCache();
    }

    public function transactional($func)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'transactional', array('func' => $func), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->transactional($func);
    }

    public function commit()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'commit', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->commit();
    }

    public function rollback()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'rollback', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getClassMetadata', array('className' => $className), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'createQuery', array('dql' => $dql), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'createNamedQuery', array('name' => $name), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'createQueryBuilder', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'flush', array('entity' => $entity), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'clear', array('entityName' => $entityName), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->clear($entityName);
    }

    public function close()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'close', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->close();
    }

    public function persist($entity)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'persist', array('entity' => $entity), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'remove', array('entity' => $entity), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'refresh', array('entity' => $entity), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'detach', array('entity' => $entity), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'merge', array('entity' => $entity), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getRepository', array('entityName' => $entityName), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'contains', array('entity' => $entity), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getEventManager', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getConfiguration', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'isOpen', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getUnitOfWork', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getProxyFactory', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'initializeObject', array('obj' => $obj), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'getFilters', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'isFiltersStateClean', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'hasFilters', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return $this->valueHolderb88e3->hasFilters();
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

        $instance->initializerac502 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolderb88e3) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolderb88e3 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolderb88e3->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, '__get', ['name' => $name], $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        if (isset(self::$publicPropertiesea5b4[$name])) {
            return $this->valueHolderb88e3->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb88e3;

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

        $targetObject = $this->valueHolderb88e3;
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
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb88e3;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderb88e3;
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
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, '__isset', array('name' => $name), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb88e3;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolderb88e3;
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
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, '__unset', array('name' => $name), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderb88e3;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolderb88e3;
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
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, '__clone', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        $this->valueHolderb88e3 = clone $this->valueHolderb88e3;
    }

    public function __sleep()
    {
        $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, '__sleep', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;

        return array('valueHolderb88e3');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerac502 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerac502;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerac502 && ($this->initializerac502->__invoke($valueHolderb88e3, $this, 'initializeProxy', array(), $this->initializerac502) || 1) && $this->valueHolderb88e3 = $valueHolderb88e3;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolderb88e3;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolderb88e3;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
