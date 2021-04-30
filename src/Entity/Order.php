<?php

namespace App\Entity;

use App\Repository\OrderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=OrderRepository::class)
 * @ORM\Table(name="`order`")
 */
class Order
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="orders")
     * @ORM\JoinColumn(nullable=false)
     */
    private $userid;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $external_order_id;

    /**
     * @ORM\ManyToOne(targetEntity=UserAddress::class, inversedBy="orders")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user_address_id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $notes;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $status;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $order_type;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdtime;

    /**
     * @ORM\Column(type="datetime")
     */
    private $modifiedtime;

    /**
     * @ORM\OneToMany(targetEntity=OrderProduct::class, mappedBy="orderid")
     */
    private $orderProducts;

    public function __construct()
    {
        $this->orderProducts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserid(): ?User
    {
        return $this->userid;
    }

    public function setUserid(?User $userid): self
    {
        $this->userid = $userid;

        return $this;
    }

    public function getExternalOrderId(): ?string
    {
        return $this->external_order_id;
    }

    public function setExternalOrderId(string $external_order_id): self
    {
        $this->external_order_id = $external_order_id;

        return $this;
    }

    public function getUserAddressId(): ?UserAddress
    {
        return $this->user_address_id;
    }

    public function setUserAddressId(?UserAddress $user_address_id): self
    {
        $this->user_address_id = $user_address_id;

        return $this;
    }

    public function getNotes(): ?string
    {
        return $this->notes;
    }

    public function setNotes(?string $notes): self
    {
        $this->notes = $notes;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getOrderType(): ?string
    {
        return $this->order_type;
    }

    public function setOrderType(string $order_type): self
    {
        $this->order_type = $order_type;

        return $this;
    }

    public function getCreatedtime(): ?\DateTimeInterface
    {
        return $this->createdtime;
    }

    public function setCreatedtime(\DateTimeInterface $createdtime): self
    {
        $this->createdtime = $createdtime;

        return $this;
    }

    public function getModifiedtime(): ?\DateTimeInterface
    {
        return $this->modifiedtime;
    }

    public function setModifiedtime(\DateTimeInterface $modifiedtime): self
    {
        $this->modifiedtime = $modifiedtime;

        return $this;
    }

    /**
     * @return Collection|OrderProduct[]
     */
    public function getOrderProducts(): Collection
    {
        return $this->orderProducts;
    }

    public function addOrderProduct(OrderProduct $orderProduct): self
    {
        if (!$this->orderProducts->contains($orderProduct)) {
            $this->orderProducts[] = $orderProduct;
            $orderProduct->setOrderid($this);
        }

        return $this;
    }

    public function removeOrderProduct(OrderProduct $orderProduct): self
    {
        if ($this->orderProducts->removeElement($orderProduct)) {
            // set the owning side to null (unless already changed)
            if ($orderProduct->getOrderid() === $this) {
                $orderProduct->setOrderid(null);
            }
        }

        return $this;
    }
}
